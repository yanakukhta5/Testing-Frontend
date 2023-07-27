export type TComment = {
 postId: number,
 id: number,
 name: string,
 email: string,
 body: string
}

export type TPhoto = {
 albumId: number
 id: number
 title: string
 url: string
 thumbnailUrl: string
}

export class Placeholder {

 readonly url: string

 constructor(url: string){
  this.url = url
 }

 async getComments(start: number, limit: number, endpoint: string = 'comments'): Promise<TComment[]> {
  const response = await fetch(`${this.url}/${endpoint}?` + new URLSearchParams({
   _start: start.toString(),
   _limit: limit.toString()
  }))
  return await response.json()
 }

 async getPhotos(start: number, limit: number, endpoint: string = 'photos'): Promise<TPhoto[]>{
  const response = await fetch(`${this.url}/${endpoint}?` + new URLSearchParams({
   _start: start.toString(),
   _limit: limit.toString()
  }))
  return await response.json()
 }
}

export const placeholder = new Placeholder('https://jsonplaceholder.typicode.com')
