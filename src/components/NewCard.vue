<script>
  import store from '../store'
  import DoughnutChart from './DoughnutChart.vue'
  export default {
    data() {
      return {
        sortlist: '',
        hello: null,
        selector: false,
        theme: '',
        isVisible: false
      }
    },
    methods: {
      visibilityChanged(isVisible, entry) {
        let time = entry.target.attributes.time.value
        if (isVisible) {
          if (time < 5) {
            store.commit('getTime', 15)
          } else store.commit('getTime', time)
        }
      }
    },
    computed: {
      wichArray() {
        if (this.newArray === null) {
          return
        }
        let sorted = [...this.newArray]

        if (this.sortlist === 'Lägst kalorier') {
          sorted.sort((a, b) => a.recipe.calories - b.recipe.calories)
          console.log(sorted)
          return sorted
        }
        if (this.sortlist === 'Kortast tillagningstid') {
          sorted.sort((a, b) => a.recipe.totalTime - b.recipe.totalTime)
          return sorted
        } else return sorted
      }
    },
    components: { DoughnutChart },
    props: {
      newArray: {
        type: [Object, Array],
        default() {
          return { newArray: 'Det fungerar inte' }
        }
      },
      nyaListan: {
        type: String,
        default: 'Hej'
      }
    },
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
  <div class="sort-list">
    <label for="sortBy">Sortera</label>
    <select class="sortlist" v-model="sortlist" id="sortBy">
      <option>Kortast tillagningstid</option>
      <option>Lägst kalorier</option>
    </select>
  </div>
  <div class="flex-container" v-for="response in wichArray" :key="response.id">
    <div class="card card-light mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="response.recipe.image" class="img-fluid" alt="..." />

          <div class="row img-row">
            <small
              v-if="
                !response.recipe.healthLabels.includes(
                  'Dairy-Free' || 'Wheat-Free' || 'Egg-Free'
                )
              "
              class="text-muted"
            >
              Allergener:
            </small>
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
          <div
            class="row chart-row"
            v-observe-visibility="visibilityChanged"
            :time="response.recipe.totalTime"
          >
            <small class="text-muted">Tillagningstid:</small>
            <DoughnutChart />
          </div>
        </div>

        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ response.recipe.label }}</h5>
            <ul class="list-group list-group-flush">
              <li
                v-for="ingredientLine in response.recipe.ingredientLines"
                :key="ingredientLine.id"
                class="list-group-item"
              >
                {{ ingredientLine }}
              </li>
            </ul>
            <a :href="response.recipe.url" class="card-text">
              <small class="text-muted">Länk till hela receptet</small>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .img-fluid {
    border-radius: 50%;
    margin-top: -10px;
    margin-left: -20px;
    box-shadow: 0px 5px 15px rgb(54, 52, 52);
  }

  .flex-container {
    display: flex;
    flex-direction: column;
    margin: 50px;
  }

  .flex-container:nth-child(odd) {
    flex-direction: row-reverse;
  }
  .card {
    max-width: 590px;
    border: none;
  }
  .img-row,
  .chart-row {
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
    img {
      width: 60px;
      height: 30px;
      align-self: flex-end;
      margin: -10px;
    }
    small {
      width: max-content;
      margin: 0;
    }
  }
  .sort-list {
    display: flex;
    flex-direction: column;
    width: max-content;
    margin: auto;
    justify-content: center;
    align-items: center;

    label {
      padding: 10px;
      margin-top: 30px;
    }
    select {
      background-color: #575151ad;
      text-align: center;
      border-radius: 10px;
    }
    option {
      color: rgb(243, 242, 240);
      background-color: #706f6fad;
      border-radius: 10px;
    }
  }
</style>
