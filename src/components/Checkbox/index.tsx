import { HTMLAttributes, FC } from 'react'

import clsx from 'clsx'

import styles from './Checkbox.module.scss'

type CheckboxProps = HTMLAttributes<HTMLInputElement> & {
 label?: string
 id: string
}

export const Checkbox: FC<CheckboxProps> = ({className, label, id, ...props}) => {
 return (
  <div className={styles.wrapper}>
   <input type="checkbox" className={clsx(styles.checkbox, className)} id={id} {...props} />
   <label className={styles.label} htmlFor={id}>{label}</label>
  </div>
 )
}