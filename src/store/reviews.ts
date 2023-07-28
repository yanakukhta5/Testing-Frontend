import { makeAutoObservable, runInAction } from "mobx"

import { placeholder, TComment, TPhoto } from '@/services'

type TSingleReview = TComment & TPhoto

class Reviews {
 start = 0
 limit = 3
 loading = false

 comments: TComment[] = []
 photos: TPhoto[] = []
 data: TSingleReview[] = []

 constructor(){
  makeAutoObservable(this)
  this.getReviews()
 }

 increaseStart() {
  this.start = this.start + 3
 }

 async getReviews(){
  this.loading = true
  const photos = await placeholder.getPhotos(this.start, this.limit)
  const comments = await placeholder.getComments(this.start, this.limit)
  this.increaseStart()

  runInAction(() => {
   this.comments.push(...comments)
   this.photos.push(...photos)

   this.comments.forEach((elem, index) => {
    if(this.start < index + this.limit + 1) this.data.push(Object.assign({}, elem, this.photos[index]))
   })

   this.loading = false
  })
 }

}

export const reviews = new Reviews()