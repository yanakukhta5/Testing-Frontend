import { FC } from 'react'
import { observer } from 'mobx-react-lite'

import { Button, Loader } from '@/components'
import { reviews } from '@/store'

import { List } from './List'
import styles from './Catalog.module.scss'

export const Catalog: FC = observer(() => {
  const buttonClickHandler = () => {
    reviews.getReviews()
  }

  return (
    <main className={styles.catalog}>
      <List />

      {reviews.loading && <Loader className={styles.loader} />}

      <Button className={styles.more} onClick={buttonClickHandler}>
        More
      </Button>
    </main>
  )
})
