import { HTMLAttributes, FC, useState, forwardRef } from 'react'
import clsx from 'clsx'

import styles from './Input.module.scss'

type InputProps = HTMLAttributes<HTMLInputElement> & {
  id: string
  label?: string
  autoComplete?: 'on' | 'off'
}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, id, ...props }, input) => {
    const [labelLift, setLabelLift] = useState(false)

    const clickCallback = () => {
      setLabelLift(true)
      input?.current.focus()
    }

    const labelLiftCheck = () => {
      if (input?.current?.value === '') {
        input.current?.blur()
        setLabelLift(false)
      }
    }

    return (
      <div
        onBlur={labelLiftCheck}
        className={styles.wrapper}
        onClick={clickCallback}
      >
        <input
          className={clsx(styles.input, className)}
          ref={input}
          id={id}
          {...props}
        />

        <label
          className={clsx({ [styles.liftedInput]: labelLift }, styles.label)}
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    )
  }
)
