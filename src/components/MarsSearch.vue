<template>
  <form @submit.prevent="changeDate">
    <input v-model="marsDate" placeholder="20xx-m-d" type="date">
    <input type="submit">
  </form>
</template>

<script>
export default {
  setup() {
    return {
      marsDate: null,
      changeDate() {
        console.log(this.marsDate)
      }
    }
  }
}
</script>

<style>

</style>
