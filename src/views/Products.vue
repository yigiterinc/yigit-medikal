<template>
  <div class="products" v-if="this.products">
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
      groupedPaginatedProducts() {
        return _.chunk(this.paginatedProducts, 3);
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