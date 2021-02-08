<template>
  <div v-if="this.products">
    <b-container>
      <b-row v-for="(productGroup, index) in groupedPaginatedProducts" :key="index">
        <b-col v-for="(product) in productGroup"  :key="product.id">
          <div>
            <img class="product-image" :src="product.photo_path" alt="">
            <br>
            {{product.name}}
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-pagination
            @change="onPageChanged"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="data">
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
        paginatedProducts: this.products,
        perPage: 9,
        currentPage: 1
      }
    },
    methods: {
      paginate(page_size, page_number) {
        let itemsToParse = this.products;
        this.paginatedProducts = itemsToParse.slice(page_number * page_size, (page_number + 1) * page_size
        );
      },
      onPageChanged(page) {
        this.paginate(this.perPage, page - 1);
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
    mounted() {
      this.paginate(this.perPage, 0);
    },
    created() {
      this.products = Products.PRODUCTS
    }
  }
</script>

<style scoped>
  .product-image {
    height: 200px;
    width: 200px;
  }
</style>