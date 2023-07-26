import { FC } from 'react'
import clsx from 'clsx'

import styles from './Button.module.scss'
import { ButtonProps } from './types'

export const Button: FC<ButtonProps> = ({className, ...props}) => {
 return (
  <button className={clsx(styles.button, className)} {...props}></button>
 )
}