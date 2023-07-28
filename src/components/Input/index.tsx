import { HTMLAttributes, FC, useRef,
 useCallback, useState } from 'react'
import clsx from 'clsx'

import styles from './Input.module.scss'

type InputProps = HTMLAttributes<HTMLInputElement> & {
 id: string
 label?: string
 autoComplete?: 'on' | 'off'
}

export const Input: FC<InputProps> = ({className, label, id, ...props}) => {

 const [labelLift, setLabelLift] = useState(false)

 const input = useRef<HTMLInputElement | null>(null)

 const clickCallback = useCallback(() => {
  setLabelLift(true)
  input.current?.focus()
 }, [])

 const labelLiftCheck = useCallback(() => {
  if(input.current?.value === ''){
   input.current?.blur()
   setLabelLift(false)
  }
 }, [])
 
 return (
  <div onBlur={labelLiftCheck} className={styles.wrapper} onClick={clickCallback}>
   <label className={clsx({[styles.liftedInput]: labelLift}, styles.label)} htmlFor={id}>{label}</label>
   <input className={clsx(styles.input, className)} ref={input} id={id} {...props}  />
  </div>
 )
}