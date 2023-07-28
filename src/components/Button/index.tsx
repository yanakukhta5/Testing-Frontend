import { FC, ButtonHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

import styles from './Button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, ...props }, ref) => {
  return (
    <button
      className={clsx(styles.button, className)}
      ref={ref}
      {...props}
    ></button>
  )
})
