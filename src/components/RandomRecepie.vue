<script>
  import RandomNumberButton from './RandomNumberButton.vue'
  import NewCard from './NewCard.vue'
  export default {
    created() {
      this.axios
        .get(
          `https://api.edamam.com/api/recipes/v2/?q=chicken&app_id=f316c367&app_key=209131d0c229f629c823bd2904b1b72f&type=public`
        )
        .then((response) => {
          this.responses = response.data.hits
        })
    },
    data() {
      return {
        cusineNumber: 2,
        YOUR_APP_ID: 'f316c367',
        YOUR_API_KEY: '209131d0c229f629c823bd2904b1b72f',
        responses: null,
        random: [
          'chicken',
          'sausage',
          'potato',
          'pork',
          'beans',
          'ice-cream',
          'beef',
          'rice'
        ],
        recipeNumber: 4,
        cusine: [
          'Nordic',
          'Japanese',
          'French',
          'American',
          'Chinese',
          'Indian',
          'Italian',
          'South American'
        ],
        sortlist: ''
      }
    },
    methods: {
      getRandom() {
        this.axios
          .get(
            `https://api.edamam.com/api/recipes/v2/?q=${
              this.random[this.recipeNumber]
            }&cuisineType=${this.cusine[this.cusineNumber]}&app_id=${
              this.YOUR_APP_ID
            }&app_key=${this.YOUR_API_KEY}&type=public`
          )
          .then((response) => {
            this.responses = response.data.hits
          })
      },
      randomRecipe(value) {
        this.cusineNumber = value
        this.recipeNumber = value + 1
        this.getRandom()
      }
    },
    emits: ['randomNumber'],
    components: { RandomNumberButton, NewCard },
    props: {
      newArray: {
        type: [Array, Object],
        default: null
      }
    }
  }
</script>
<template>
  <!-- <p>{{ $routes.params.userName }}</p> -->
  <RandomNumberButton @random-number="randomRecipe" />
  <NewCard :new-array="this.responses" />
</template>
<style scoped lang="scss"></style>
