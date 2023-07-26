import { FC } from 'react'

import styles from './List.module.scss'
import { Card, Button } from '@/components'

export const List: FC = () => {
 return (
  <main className={styles.list}>
   <div className={styles.cards}>

    <Card title='Eliseo@gardner.biz' graide={5} className={styles.card}>
     <div className={styles.comment}>
      <p className={styles.text}>Copy
laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium</p>
      <Button className={styles.button}>Visit comment</Button>
     </div>
    </Card>

    <Card title='Eliseo@gardner.biz' graide={5}>
     <div className={styles.comment}>
      <p className={styles.text}></p>
      <Button className={styles.button}>Visit comment</Button>
     </div>
    </Card>
    <Card title='Eliseo@gardner.biz' graide={5}>
     <div className={styles.comment}>
      <p className={styles.text}>Copy
laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium</p>
      <Button className={styles.button}>Visit comment</Button>
     </div>
    </Card>
    <Card title='Eliseo@gardner.biz' graide={5}>
     <div className={styles.comment}>
      <p className={styles.text}></p>
      <Button className={styles.button}>Visit comment</Button>
     </div>
    </Card>
    <Card title='Eliseo@gardner.biz' graide={5}>
     <div className={styles.comment}>
      <p className={styles.text}>Copy
laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium</p>
      <Button className={styles.button}>Visit comment</Button>
     </div>
    </Card>
   </div>

   <Button className={styles.more}>More</Button>
  </main>
 )
}