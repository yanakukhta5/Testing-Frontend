import { HTMLAttributes, FC, forwardRef } from 'react'
import clsx from 'clsx'

import styles from './Checkbox.module.scss'

type CheckboxProps = HTMLAttributes<HTMLInputElement> & {
  label?: string
  id: string
}

export const Checkbox: FC<CheckboxProps> = forwardRef<
  HTMLInputElement,
  CheckboxProps
>(({ className, label, id, ...props }, ref) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        className={clsx(styles.checkbox, className)}
        id={id}
        ref={ref}
        {...props}
      />

      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  )
})
