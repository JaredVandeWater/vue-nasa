<template>
  <div class="container-fluid">
    <div class="row">
      <div class="about">
        <MarsSearch />
      </div>
    </div>
    <div v-if="marsPics" class="row">
      <MarsPic v-for="mp in marsPics" :key="mp.imgURL" :mars="mp" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { marsPicService } from '../services/MarsPicService'
import { AppState } from '../AppState'
export default {
  name: 'MarsPage',
  setup() {
    onMounted(() => {
      try {
        marsPicService.grabMarsPics()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      marsPics: computed(() => AppState.marsImages)
    }
  }

}
</script>
