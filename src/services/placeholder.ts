export type TComment = {
  postId: number
  id: number
  name: string
  email: string
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

  constructor(url: string) {
    this.url = url
  }

  private async getResource<T>(
    start: number,
    limit: number,
    endpoint: string
  ): Promise<T[]> {
    const response = await fetch(
      `${this.url}/${endpoint}?` +
        new URLSearchParams({
          _start: start.toString(),
          _limit: limit.toString()
        })
    )
    return await response.json()
  }

  async getComments(start: number, limit: number): Promise<TComment[]> {
    return await this.getResource<TComment>(start, limit, 'comments')
  }

  async getPhotos(start: number, limit: number): Promise<TPhoto[]> {
    return await this.getResource<TPhoto>(start, limit, 'photos')
  }
}

export const placeholder = new Placeholder(
  'https://jsonplaceholder.typicode.com'
)
