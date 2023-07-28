import { FC, HTMLAttributes } from 'react'
import clsx from 'clsx'

import styles from './Button.module.scss'

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  type?: 'button' | 'reset' | 'submit'
}

export const Button: FC<ButtonProps> = ({ className, ...props }) => {
  return <button className={clsx(styles.button, className)} {...props}></button>
}
