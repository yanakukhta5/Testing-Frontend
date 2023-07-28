import { FC, HTMLAttributes } from 'react'
import clsx from 'clsx'

import { Star } from '@/assets/svg'

import styles from './Card.module.scss'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  title: string
  graide?: number
  imgSrc: string
}

export const Card: FC<CardProps> = ({
  title,
  graide,
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

          {graide && (
            <div className={styles.rateBlock}>
              <p className={styles.graide}>{graide}</p>
              <Star className={styles.star} />
            </div>
          )}
        </div>

        {children}
      </div>
    </article>
  )
}
