<script>
  import store from '../store'
  import NewCard from './NewCard.vue'

  export default {
    methods: {
      sendApiRequest() {
        fetch(
          `https://api.edamam.com/api/recipes/v2/?q=${this.searchInfo}&app_id=${this.YOUR_APP_ID}&app_key=${this.YOUR_API_KEY}&type=public`
        )
          .then((result) => result.json())
          .then((responses) => {
            this.responses = responses.hits
            store.commit('recepiesOutsideComponent', this.responses)
          })
      },
      sortinglist(value) {
        this.sortlistBy = value
        console.log('SortlistBy från Get Vue:  ' + this.sortlistBy)
      }
    },
    data() {
      return {
        YOUR_APP_ID: 'f316c367',
        YOUR_API_KEY: '209131d0c229f629c823bd2904b1b72f',
        searchInfo: '',
        responses: [],
        sortListBy: ''
      }
    },
    components: { NewCard }
  }
</script>

<template>
  <div class="search-container">
    <input class="search-bar" v-model="searchInfo" />
    <input
      class="search-button"
      @click="sendApiRequest"
      type="button"
      value="Sök"
    />
  </div>
  <NewCard :new-array="this.responses" :nya-listan="this.sortListBy" />
</template>
<style lang="scss" scoped>
  $button-color: #382727ad;
  .search-container {
    margin: auto;
    display: flex;
    flex-direction: column;
    width: max-content;
    height: 6rem;
    align-items: center;
    justify-content: space-between;
  }
  .search-bar {
    border-radius: 10px;
    width: 18rem;
    height: fit-content;
  }
  .search-button {
    display: block;
    width: 8rem;
    border-radius: 8px;
    background-color: $button-color;
  }
</style>
