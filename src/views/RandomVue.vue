<script>
  import RandomRecepie from '../components/RandomRecepie.vue'
  export default {
    created() {},
    components: { RandomRecepie }
  }
</script>

<template>
  <h1>Slumpa fram recept</h1>
  <RandomRecepie />
</template>
<style scoped lang="scss">
  h1 {
    text-align: center;
  }
</style>
