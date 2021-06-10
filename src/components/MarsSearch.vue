<template>
  <form @submit.prevent="changeDate">
    <input v-model="marsDate" placeholder="20xx-m-d" type="date">
    <input type="submit">
  </form>
</template>

<script>
import { AppState } from '../AppState'
import { marsPicService } from '../services/MarsPicService'
export default {
  setup() {
    return {
      marsDate: null,
      changeDate() {
        AppState.marsDate = null
        AppState.marsDate = this.marsDate
        marsPicService.grabMarsPics()
        console.log(AppState.marsDate)
      }
    }
  }
}
</script>

<style>

</style>
