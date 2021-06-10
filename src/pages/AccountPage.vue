<template>
  <div class="container-fluid">
    <div class="row">
      <div class="about text-center">
        <h1>Welcome {{ account.name }}</h1>
        <img class="rounded" :src="account.picture" alt="" />
        <p>{{ account.email }}</p>
      </div>
    </div>
    <div class="row">
    </div>
    <MarsPic v-for="mp in myMarsPics" :key="mp.Id" :mars="mp" />
    <div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account),
      myMarsPics: computed(() => AppState.myMarsImages)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
