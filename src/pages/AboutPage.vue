<template>
  <div class="about">
    <MarsSearch />
    <MarsPic v-for="mp in marsPics" :key="mp.imgURL" :mars="mp" />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { marsPicService } from '../services/MarsPicService'
import { AppState } from '../AppState'
export default {
  name: 'AboutPage',
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
