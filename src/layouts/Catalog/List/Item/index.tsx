import { FC } from 'react'

import { Card, Button } from '@/components'
import { TReview } from '@/store'

import styles from './Item.module.scss'

type ItemProps = {
  review: TReview
}

export const Item: FC<ItemProps> = ({ review }) => {
  return (
    <Card
      title={review.email}
      grade={review.grade}
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
