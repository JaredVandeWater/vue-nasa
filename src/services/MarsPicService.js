import axios from 'axios'
import { AppState } from '../AppState'
import { MarsImage } from '../Models/MarsImage'

class MarsPicService {
  async grabMarsPics() {
    const res = await axios
      .get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2019-7-3&api_key=DQLlLrw4cbhCdamOgYYJMCujaRiJrAYXeqOnsJw1')
    console.log(res.data.photos)
    AppState.marsImages = res.data.photos.map(p => new MarsImage(p))
    console.log(AppState.marsImages)
  }
}

export const marsPicService = new MarsPicService()
