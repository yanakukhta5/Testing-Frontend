import { FC, useCallback } from 'react'
import { observer } from 'mobx-react-lite'

import { Button, Loader } from '@/components'
import { reviews } from '@/store'

import { Cards } from './Cards'
import styles from './Catalog.module.scss'


export const Catalog: FC = observer(() => {
  const buttonClickHandler = useCallback(() => {
    reviews.getReviews()
  }, [])

  return (
    <main className={styles.catalog}>
      <Cards />

      {reviews.loading && <Loader className={styles.loader} />}
      
      <Button className={styles.more} onClick={buttonClickHandler}>
        More
      </Button>
    </main>
  )
})
