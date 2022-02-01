<script>
  import DoughnutChart from './DoughnutChart.vue'
  import store from '../store'
  export default {
    data() {
      return {
        mySearch: null,
        selector: false,
        sortlist: '',
        theme: ''
      }
    },
    methods: {
      handleInfinityScroll(isVisible, entry) {
        let number = entry.target.attributes.time.value
        if (!isVisible) {
          this.selector = false
        } else {
          this.selector = true

          if (number < 5) {
            store.commit('getTime', 15)
          } else store.commit('getTime', number)
        }
      }
    },
    computed: {
      wichArray() {
        let sorted = [...this.newArray]

        if (this.sortlist === 'lägst kalorier') {
          sorted.sort((a, b) => a.recipe.calories - b.recipe.calories)
          return sorted
        }
        if (this.sortlist === 'Kortast tillagningstid') {
          sorted.sort((a, b) => a.recipe.totalTime - b.recipe.totalTime)
          return sorted
        } else return sorted
      }
    },
    props: {
      newArray: {
        type: [Array, Object],
        default: null
      }
    },
    components: { DoughnutChart },
    watch: {
      selector(newValue) {
        if (newValue === true) {
          this.theme = 'visible'
        } else {
          this.theme = 'notVisible'
        }
      }
    }
  }
</script>
<template>
  <label for="sortBy">Sortera listan efter; </label>
  <select v-model="sortlist" id="sortBy">
    <option>-- Ingen sortering --</option>
    <option>Kortast tillagningstid</option>
    <option>lägst kalorier</option>
  </select>

  <div class="test" v-for="response in wichArray" :key="response.id">
    <div class="card">
      <img class="card-img-left" :src="response.recipe.image" alt=".." />

      <div class="card-body">
        <h5
          class="card-title"
          v-observe-visibility="handleInfinityScroll"
          :time="response.recipe.totalTime"
        >
          {{ response.recipe.label }}
        </h5>
        <p class="card-text">Type of dish: {{ response.recipe.dishType[0] }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li
          v-for="ingredientLine in response.recipe.ingredientLines"
          :key="ingredientLine.id"
          class="list-group-item"
        >
          {{ ingredientLine }}
        </li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
      </div>
    </div>
    <div :class="theme">
      <img
        v-if="!response.recipe.healthLabels.includes('Dairy-Free')"
        src="/assets/milk.png"
      />
      <img
        v-if="!response.recipe.healthLabels.includes('Wheat-Free')"
        src="/assets/wheat.png"
      />
      <img
        v-if="!response.recipe.healthLabels.includes('Egg-Free')"
        src="/assets/eggs.png"
      />
    </div>
    <DoughnutChart />
  </div>
</template>
<style scoped>
  label {
    margin: 30px;
  }
  .test {
    display: flex;
    padding-top: 100px;
    margin-left: 200px;
    margin-right: 200px;
  }

  .notVisible {
    opacity: 0;
  }
  .visible {
    transition: 5s;
    opacity: 100;
  }

  .card {
    width: 30rem;
    margin: 60px, 50px, 500px, 40px;
    padding: 10px;
  }
  .test:nth-child(odd) {
    flex-direction: row-reverse;
  }
</style>
