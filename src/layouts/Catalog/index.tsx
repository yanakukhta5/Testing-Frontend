import { FC } from 'react'

import styles from './Catalog.module.scss'
import { Button, Loader } from '@/components'

import { Cards } from './Cards'

export const Catalog: FC = () => {
 return (
  <main className={styles.catalog}>
   <Cards /> 

   <Loader className={styles.loader} />
   <Button className={styles.more}>More</Button>
  </main>
 )
}