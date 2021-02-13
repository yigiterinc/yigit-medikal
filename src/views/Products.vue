<template>
  <div class="products" v-if="this.product.products">
    <b-container class="products-main-container pt-4">
      <b-row>
        <b-col v-if="productCategoryIsNotEmpty" class="col-sm-3">
          <product-filter :filters="filters"
                          @optionSelected="onOptionSelected">
          </product-filter>
        </b-col>
        <b-col>
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

        </b-col>
      </b-row>

      <b-row class="justify-content-center">
        <b-pagination
            v-model="pagination.currentPage"
            :total-rows="rows"
            :per-page="pagination.perPage"
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
  import { TYPES } from "@/data/types.js";

  import ProductFilter from "@/components/ProductFilter"

  import _ from 'lodash';

  export default {
    name: "Products",
    components: {
      ProductFilter
    },
    data() {
      return {
        product: {
          products: null,
          productCategory: '',
          productsFilteredByCategory: null,
          productsFilteredByBrandAndAttribute: [],
          paginatedProducts: this.products,
        },
        pagination: {
          perPage: 9,
          currentPage: 1,
        },
        filters: [],
        brandsSelected: {},
        attributesSelected: {},
        BRANDS_FILTER_INDEX: 0,
        ATTRIBUTES_FILTER_INDEX: 1
      }
    },
    computed: {
      rows() {
        return this.product.products.length;
      },
      groupedPaginatedProducts() {
        return _.chunk(this.product.paginatedProducts, 3);
      },
      productCategoryIsNotEmpty() {
        return this.product.productCategory !== undefined && this.product.productCategory.length > 0;
      }
    },
    watch: {
      '$route.params.type': {
        handler: function (val) {
          if (this.product.productCategory) {
            console.log(val);
            this.product.productCategory = val;
            this.product.productsFilteredByCategory = this.product.products.filter(product => product.type.name === val)
          }
        },
        deep: true,
        immediate: true
      },
      productType: function () {
        if (this.product.productsFilteredByCategory) {
          this.paginate(this.pagination.perPage, 0);
        }
      },
      brandsSelected: {
        handler: function () {
            console.log('for some random reason, i am broke, fix me please')  // TODO
        },
        deep: true
      }
    },
    methods: {
      paginate(page_size, page_number) {
          let itemsToParse = this.product.productsFilteredByCategory;
          this.product.paginatedProducts = itemsToParse.slice(page_number * page_size, (page_number + 1) * page_size);
      },
      onPageChanged(page) {
        this.paginate(this.pagination.perPage, page - 1);
      },
      onOptionSelected({filterIndex, optionIndex, value}) {
        if (filterIndex === this.BRANDS_FILTER_INDEX) {
          this.brandsSelected[optionIndex] = value;
          console.log(this.brandsSelected)
        } else if (filterIndex === this.ATTRIBUTES_FILTER_INDEX) {
          this.attributesSelected[optionIndex] = value
        }
      },
      fillFilters(types, productType) {
        for (const key in types) {
          if (Object.prototype.hasOwnProperty.call(types, key)) {
            const type = types[key]
            if (type.name === productType) {
              const brands = Object.values(type.brands);
              const attributes = Object.values(type.attributes);

              this.filters = [
                {
                  label: "Markalar",
                  options: brands,
                  selected: Array(brands.length).fill(false)
                },
                {
                  label: "Özellikler",
                  options: attributes,
                  selected: Array(attributes.length).fill(false)
                }
              ]

              return;
            }
          }
        }
      }
    },
    mounted() {
      this.paginate(this.pagination.perPage, 0);
    },
    created() {
      this.product.products = Products.PRODUCTS;
      this.product.productCategory = this.$route.params.type;
      this.product.productsFilteredByCategory = this.products;

      if (this.product.productCategory) {
        this.product.productsFilteredByCategory = this.product.products
            .filter(product => product.type.name === this.product.productCategory)
        this.fillFilters(TYPES, this.product.productCategory);
      }
    }
  }
</script>

<style scoped>

  .products {
    height: 100vh;
    position: relative;
  }

  .products-main-container {
    padding-right: 0;
    margin-right: 25vw;
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