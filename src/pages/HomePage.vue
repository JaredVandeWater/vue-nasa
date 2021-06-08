<template>
  <DailyPic />
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import { dailyPicService } from '../services/DailyPicService'
export default {
  setup() {
    onMounted(() => {
      try {
        dailyPicService.grabDailyPic()
      } catch (error) {
        console.error(error)
      }
    })
    return {

    }
  }

}
</script>
<style lang="scss">
</style>
