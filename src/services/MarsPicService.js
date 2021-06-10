import axios from 'axios'
import { AppState } from '../AppState'
import { MarsImage } from '../Models/MarsImage'

class MarsPicService {
  async grabMarsPics() {
    const res = await axios
      .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${AppState.marsDate}&api_key=DQLlLrw4cbhCdamOgYYJMCujaRiJrAYXeqOnsJw1`)
    console.log(res.data.photos)
    AppState.marsImages = res.data.photos.map(p => new MarsImage(p))
  }

  likePic(id) {
    const selectedPic = AppState.marsImages.find(i => i.imgId === id)
    AppState.myMarsImages = [...AppState.myMarsImages, selectedPic]
    console.log(AppState.myMarsImages)
  }
}

export const marsPicService = new MarsPicService()
