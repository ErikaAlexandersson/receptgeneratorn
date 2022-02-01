<script>
  import GETVue from '../components/GETVue.vue'

  export default {
    components: {
      GETVue
    }
  }
</script>

<template>
  <p>
    Skriv in ett recept du vill söka efter, sortera listan efter smak och behag.
  </p>
  <p>
    Har du absolut ingen aning om vad du vill laga så klicka dig in på "Slumpa
    fram recept" så kommer 10 olika recept genreras till dig för att få
    inspiration.
  </p>
  <p>Happy hunting!</p>
  <GETVue />
</template>
<style scoped lang="scss">
  * {
    text-align: center;
  }
  p {
    margin-top: 10px;
    padding: 10px;
  }
</style>
