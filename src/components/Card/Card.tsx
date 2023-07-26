import { FC } from 'react'
import clsx from 'clsx'

import styles from './Card.module.scss'
import { CardProps } from './types'
import { Star } from '@/assets/svg'

export const Card: FC<CardProps> = ({title, graide, children, className, ...props}) => {

 return (
  <article className={clsx('cardHasHover', styles.card, className)} {...props}>

   <img className={styles.img} src='https://fikiwiki.com/uploads/posts/2022-02/1645050502_27-fikiwiki-com-p-les-krasivie-kartinki-30.jpg' />

   <div className={clsx('contentNoBottom', styles.text)}>
    <div className={styles.top}>
     <h2 className={styles.title}>{title}</h2>

     { graide && <div className={styles.rateBlock}>
      <p className={styles.graide}>{graide}</p>
      <Star className={styles.star} />
     </div> }

    </div> 
    
    {children}
   </div>

  </article>
 )
}