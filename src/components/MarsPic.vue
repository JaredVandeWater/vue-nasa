<template>
  <img class="w-25 " :src="mars.imgURL" alt="" srcset="">
</template>

<script>
export default {
  props: {
    mars: { type: Object, required: true }
  },
  setup() {

  }
}
</script>

<style>
</style>
