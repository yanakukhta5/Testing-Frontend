import { FC } from 'react'

import { Card, Button } from '@/components'
import { getRandomNumberFromRange } from '@/utils'

import styles from './Item.module.scss'

type ItemProps = {
  review: {
    email: string
    url: string
    id: number
    body: string
  }
}

export const Item: FC<ItemProps> = ({ review }) => {
  const grade = getRandomNumberFromRange(1, 5)
  return (
    <Card
      title={review.email}
      grade={grade}
      className={styles.card}
      imgSrc={review.url}
      key={review.id}
    >
      <div className={styles.comment}>
        <p className={styles.text}>{review.body}</p>

        <Button className={styles.button}>Visit comment</Button>
      </div>
    </Card>
  )
}
