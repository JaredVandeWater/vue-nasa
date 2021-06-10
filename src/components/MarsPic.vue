<template>
  <div class="col-3 m-2">
    <button v-if="liked" @click="likePic" class="top-right m-3">
      <i class="fas fa-heart"></i>
    </button>
    <img class="w-100 img-size img-fluid" :src="mars.imgURL" alt="" srcset="">
  </div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { marsPicService } from '../services/MarsPicService'
export default {
  props: {
    mars: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      user: computed(() => AppState.user),
      myPics: computed(() => AppState.myMarsImages),
      allPics: computed(() => AppState.marsImages)
    })
    return {
      state,
      liked: computed(() => state.myPics.find(p => p.imgId === props.mars.imgId)),
      likePic() {
        console.log(props.mars, 'dd')
        if (state.user.isAuthenticated) {
          marsPicService.likePic(props.mars.imgId)
          console.log('added to favs')
        } else {
          console.log('login to fav')
        }
      }
    }
  }
}
</script>

<style>
  .top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}

.img-size{
  max-width: 25rem;
}
</style>
