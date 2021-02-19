<template>
  <div class="products" v-if="this.products">
    <div class="products-main-container pt-4">
      <b-row>
        <b-col class="col-md-1 col-lg-1 col-xl-2 d-none d-md-block">
        </b-col>

        <b-col v-if="productCategoryIsNotEmpty" class="col-sm-3 col-md-3 col-lg-3 col-xl-2 d-none d-sm-block">
          <product-filter :filters="filters"
                          @optionSelected="onOptionSelected">
          </product-filter>
        </b-col>

        <b-col>
            <div class="flex-container">
              <md-card md-with-hover v-for="product in paginatedProducts" :key="product.id">
                <md-card-media>
                  <img :src="product.photo_path" alt="productImage" class="product-image">
                </md-card-media>

                <md-card-header>
                  <div class="md-title">{{product.name}}</div>
                </md-card-header>
              </md-card>
            </div>
        </b-col>

        <b-col class="col-md-1 col-lg-1 col-xl-2 d-none d-md-block">
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
    </div>
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
        products: null,
        productCategory: '',
        productsFiltered: null,
        paginatedProducts: this.products,
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
        return this.products.length;
      },
      productCategoryIsNotEmpty() {
        return this.productCategory !== undefined && this.productCategory.length > 0;
      }
    },
    watch: {
      '$route.params.type': {
        handler: function (val) {
          if (this.productCategory) {
            this.productCategory = val;
            this.fillFilters(TYPES, this.productCategory);
            this.filterProducts();
          }
        },
        deep: true,
        immediate: true
      },
      productType: function () {
        if (this.productsFiltered) {
          this.paginate(0);
        }
      },
      productsFiltered: {
        handler: function () {
          this.paginate( 0)
        },
        deep: true,
        immediate: true
      }
    },
    methods: {
      paginate(pageNumber) {
        if (!this.productsFiltered) return;

        let itemsToParse = this.productsFiltered;
        this.paginatedProducts = itemsToParse.slice(pageNumber * this.pagination.perPage,
                                                   (pageNumber + 1) * this.pagination.perPage);
      },
      onPageChanged(page) {
        this.paginate( page - 1);
      },
      onOptionSelected({filterIndex, optionIndex, value}) {
        if (filterIndex === this.BRANDS_FILTER_INDEX) {
          this.brandsSelected[optionIndex] = value;
        } else if (filterIndex === this.ATTRIBUTES_FILTER_INDEX) {
          this.attributesSelected[optionIndex] = value
        }

        this.filterProducts()
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
      },
      filterProducts() {
        this.removeAllFilters();

        this.filterByCategory()
        this.filterByBrands()
        this.filterByAttributes()
      },
      removeAllFilters() {
        this.productsFiltered = this.products;
      },
      filterByCategory() {
        if (!this.productCategory)  return;

        this.productsFiltered = this.products.filter(product => product.type.name === this.productCategory);
      },
      filterByBrands() {
        if (this.objectIsEmptyOrFullOfFalseValues(this.brandsSelected))
          return;

        let filteredByBrand = [];
        this.productsFiltered.forEach(product => {
          if (Object.values(this.brandsSelected).includes(product.brand)) {
            filteredByBrand.push(product);
          }
        })

        this.productsFiltered = filteredByBrand;
      },
      filterByAttributes() {
        if (this.objectIsEmptyOrFullOfFalseValues(this.attributesSelected))
          return;

        let filteredByAttributes = []
        this.productsFiltered.forEach(product => {
          if (Object.values(this.attributesSelected)
              .some(attribute => Object.values(product.attributes).includes(attribute))) {
            filteredByAttributes.push(product);
          }
        })

        this.productsFiltered = filteredByAttributes;
      },
      objectIsEmptyOrFullOfFalseValues(obj) {
        return _.isEmpty(obj) || Object.values(obj).every(value => value === false);
      }
    },
    mounted() {
      this.products = Products.PRODUCTS;
      this.productCategory = this.$route.params.type;
      this.fillFilters(TYPES, this.productCategory);
      this.filterProducts();
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
  }

  .product-image {
    height: auto;
    max-width: 100%;
  }

  .pagination-style {
    bottom: 20px;
    margin-top: 60px;
    margin-bottom: 50px;
  }

  .flex-container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .flex-container .md-card {
    margin-bottom: 15px;
    margin-right: 15px;

    flex-basis: calc(33.333333% - 15px);
  }

  .md-card-header {
    padding: 20px 10px 10px 10px !important;
  }

  .md-card-header * {
    font-weight: 450 !important;
    font-size: 16px !important;
    line-height: 22px;
  }

  .products-main-container {
    background-color: #dae7e8;
  }

  @media only screen and (max-width: 1200px) {
    .products-main-container {
      padding-left: 30px;
      padding-right: 20px;
    }
  }

</style>