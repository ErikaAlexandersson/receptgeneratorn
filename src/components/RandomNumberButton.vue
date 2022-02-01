<script>
  export default {
    data() {
      return {
        cusineNumber: 0
      }
    },
    methods: {
      getRandomNumber() {
        this.cusineNumber = Math.floor(Math.random() * 7)
        this.$emit('randomNumber', this.cusineNumber)
      }
    },
    emits: ['randomNumber'],
    props: {
      newArray: {
        type: [Object, Array],
        default: null
      }
    },
    components: {}
  }
</script>
<template>
  <input
    class="btn btn-success"
    type="button"
    value="Ny sökning"
    @click="getRandomNumber"
  />
</template>

<style lang="scss">
  .btn {
    border-radius: 20px;
    box-shadow: rgba(90, 88, 86, 0.466) 0 0 0 2px;
    margin-left: 45%;
  }
</style>
