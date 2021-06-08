
<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col-md-5">
        <h2 class="d-flex m-0 my-4 justify-content-center">
          {{ dailyPic.title }}
        </h2>
        <img class="w-75 w-md-50 w-lg-100 my-pic m-auto d-flex justify-content-center" :src="dailyPic.pic" alt="" srcset="">
      </div>
      <div class="col-md-6 d-flex mr-5">
        <h5 class="my-auto">
          {{ dailyPic.desc }}
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {

  setup() {
    return {
      dailyPic: computed(() => AppState.dailyPic)
    }
  }
}

</script>

<style>
</style>
