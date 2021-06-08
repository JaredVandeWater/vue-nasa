export class DailyPic {
  constructor(data) {
    this.date = data.date
    this.desc = data.explanation
    this.pic = data.hdurl
    this.title = data.title
  }
}
