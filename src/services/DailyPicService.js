const { default: axios } = require('axios')
const { AppState } = require('../AppState')
const { DailyPic } = require('../Models/DailyPic')

const dailyPicURL = 'https://api.nasa.gov/planetary/apod?api_key=DQLlLrw4cbhCdamOgYYJMCujaRiJrAYXeqOnsJw1'

class DailyPicService {
  async grabDailyPic() {
    const res = await axios.get(dailyPicURL)
    AppState.dailyPic = new DailyPic(res.data)
    console.log(AppState.dailyPic)
  }
}

export const dailyPicService = new DailyPicService()
