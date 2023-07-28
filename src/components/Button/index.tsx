import { FC, ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

import styles from './Button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({ className, ...props }) => {
  return <button className={clsx(styles.button, className)} {...props}></button>
}
