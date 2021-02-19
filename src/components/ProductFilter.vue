<template>
  <div class="product-filter">
      <div v-for="(filter, filterIndex) in filters"
           :key="filterIndex">
          <h5 class="filter">{{ filter.label }}</h5>
          <div class="ml-3" v-for="(option, optionIndex) in filter.options" :key="optionIndex">
            <b-form-checkbox
                v-model="filter.selected[optionIndex]"
                :value="option"
                @change="optionSelected(filterIndex, optionIndex)"
            >
              <span class="option">{{ option }}</span>
            </b-form-checkbox>
          </div>
        <hr class="separator"/>
      </div>

  </div>
</template>

<script>

  export default {
    name: "ProductFilter",
    props: {
      filters: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
      }
    },
    methods: {
      optionSelected(filterIndex, optionIndex) {
        this.$emit('optionSelected', {
          filterIndex: filterIndex,
          optionIndex: optionIndex,
          value: this.filters[filterIndex].selected[optionIndex]
        });
      }
    }
  }
</script>

<style scoped>
  .product-filter {
    width: auto;
    background: #f9fbfc;
    box-shadow: #c5d9db 0 0 10px;
    border-radius: 5px;
    padding-top: 10px;
  }

  .separator {
    width: 100%;
  }

  .filter {
    margin-left: 10px;
  }

  .option {
    font-size: 15px;
  }

</style>