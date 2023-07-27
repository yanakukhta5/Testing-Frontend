import { FC, HTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './Loader.module.scss'

type LoaderProps = HTMLAttributes<HTMLSpanElement> 

export const Loader: FC<LoaderProps> = ({className, ...props}) => {
 return (
  <span className={clsx(styles.loader, className)} {...props}></span>
 )
}