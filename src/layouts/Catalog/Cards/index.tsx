import { FC } from 'react'
import { observer } from 'mobx-react-lite'

import { reviews } from '@/store'
import { Card, Button } from '@/components'
import { getRandomNumberFromRange } from '@/utils'

import styles from './Cards.module.scss'

export const Cards: FC = observer(() => {
  if(!reviews.data) return null

  return (
    <div className={styles.cards}>
      {reviews.data.map((review) => {
          const grade = getRandomNumberFromRange(1, 5)

          return (
            <Card
              title={review.email}
              graide={grade}
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
        })}
    </div>
  )
})
