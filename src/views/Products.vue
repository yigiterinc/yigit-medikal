<template>
  <div class="products" v-if="this.products">
    <b-container class="pt-4">
      <b-row v-for="(productGroup, index) in groupedPaginatedProducts"
             class="mb-4"
             :key="index">
        <b-col v-for="product in productGroup" :key="product.id">
          <div>
            <img class="product-image" :src="product.photo_path" alt="">
            <br>
            {{product.name}}
          </div>
        </b-col>
      </b-row>

      <b-row class="justify-content-center">
        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            @change="onPageChanged"
            pills
            class="pagination-style mt-4"
        >
        </b-pagination>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import Products from "@/data/products"
  import _ from 'lodash';

  export default {
    name: "Products",
    data() {
      return {
        products: null,
        filteredProducts: null,
        paginatedProducts: this.products,
        perPage: 9,
        currentPage: 1,
        productType: ''
      }
    },
    computed: {
      rows() {
        return this.products.length
      },
      groupedPaginatedProducts() {
        return _.chunk(this.paginatedProducts, 3);
      }
    },
    watch: {
      '$route.params.type': {
        handler: function (val) {
          if (this.productType) {
            console.log(val);
            this.productType = val;
            this.filteredProducts = this.products.filter(product => product.type.name === val)
          }
        },
        deep: true,
        immediate: true
      },
      productType: function () {
        if (this.filteredProducts) {
          this.paginate(this.perPage, 0);
        }
      }
    },
    methods: {
      paginate(page_size, page_number) {
        let itemsToParse = this.filteredProducts;
        this.paginatedProducts = itemsToParse.slice(page_number * page_size, (page_number + 1) * page_size
        );
      },
      onPageChanged(page) {
        this.paginate(this.perPage, page - 1);
      }
    },
    mounted() {
      this.paginate(this.perPage, 0);
    },
    created() {
      this.products = Products.PRODUCTS;
      this.productType = this.$route.params.type;
      this.filteredProducts = this.products;

      if (this.productType) {
        this.filteredProducts = this.products.filter(product => product.type.name === this.productType)
      }
    }
  }
</script>

<style scoped>
  .products {
    height: 100vh;
    position: relative;
  }

  .product-image {
    height: 200px;
    width: 200px;
  }

  .pagination-style {
    position: absolute;
    bottom: 20px;
    margin-top: 60px;
    margin-bottom: 50px;
  }
</style>