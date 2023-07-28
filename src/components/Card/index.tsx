import { FC, HTMLAttributes } from 'react'
import clsx from 'clsx'

import { Star } from '@/assets/svg'

import styles from './Card.module.scss'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  title: string
  grade?: number
  imgSrc: string
}

export const Card: FC<CardProps> = ({
  title,
  grade,
  children,
  className,
  imgSrc,
  ...props
}) => {
  return (
    <article className={clsx(styles.card, className)} {...props}>
      <img className={styles.img} src={imgSrc} />

      <div className={styles.text}>
        <div className={styles.top}>
          <h2 className={styles.title}>{title}</h2>

          {grade && (
            <div className={styles.rateBlock}>
              <p className={styles.grade}>{grade}</p>

              <Star className={styles.star} />
            </div>
          )}
        </div>

        {children}
      </div>
    </article>
  )
}
