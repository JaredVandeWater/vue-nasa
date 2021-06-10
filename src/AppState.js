import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  dailyPic: {},
  marsImages: [],
  marsDate: '2019-7-3',
  myMarsImages: []
})
