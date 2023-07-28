import { FC } from 'react'
import { observer } from 'mobx-react-lite'

import { reviews } from '@/store'

import { Item } from './Item'
import styles from './List.module.scss'

export const List: FC = observer(() => {
  if (!reviews.data) return null

  return (
    <div className={styles.cards}>
      {reviews.data.map((review) => (
        <Item review={review} />
      ))}
    </div>
  )
})
