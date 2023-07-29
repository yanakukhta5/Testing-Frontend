import { makeAutoObservable, runInAction } from 'mobx'

import { placeholder, TComment, TPhoto } from '@/services'
import { getRandomNumberFromRange } from '@/utils'

export type TReview = TComment & TPhoto & { grade: number }

class Reviews {
  start = 0
  limit = 3
  loading = false

  comments: TComment[] = []
  photos: TPhoto[] = []
  data: TReview[] = []

  constructor() {
    makeAutoObservable(this)

    this.getReviews()
  }

  async getReviews() {
    this.loading = true

    const photos = await placeholder.getPhotos(this.start, this.limit)
    const comments = await placeholder.getComments(this.start, this.limit)

    this.start = this.start + 3

    runInAction(() => {
      this.comments.push(...comments)
      this.photos.push(...photos)

      this.comments.forEach((elem, index) => {
        if (this.start < index + this.limit + 1)
          this.data.push(Object.assign({}, elem, this.photos[index], {grade: getRandomNumberFromRange(1, 5)}))
      })

      this.loading = false
    })
  }
}

export const reviews = new Reviews()
