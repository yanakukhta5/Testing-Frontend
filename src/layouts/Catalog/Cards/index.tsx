import { FC, useEffect, useState } from 'react'
import styles from './Cards.module.scss'

import { Card, Button } from '@/components'
import { placeholder, TComment, TPhoto } from '@/services'
import { getRandomNumberFromRange } from '@/utils'

export const Cards: FC = () => {

 const [comments, setComments] = useState<TComment[]>([])

 const [photos, setPhotos] = useState<TPhoto[]>([])

 useEffect(() => {
  placeholder.getComments(0, 3).then((res) => {
    setComments(res)
  })
  placeholder.getPhotos(0, 3).then((res) => {
    setPhotos(res)
  })
 }, [])

 return (
  <div className={styles.cards}>

    {comments && comments.map((comment, index) => {
      const photo = photos[index]
      const grade = getRandomNumberFromRange(1, 5)

      return (
        <Card title={comment.email} graide={grade} className={styles.card} imgSrc={photo.url} key={comment.id}>
          <div className={styles.comment}>
            <p className={styles.text}>{comment.body}</p>
            <Button className={styles.button}>Visit comment</Button>
          </div>
        </Card>
      )
    })}

  </div>
 )
}