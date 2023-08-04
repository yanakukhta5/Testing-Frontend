import {
  FC,
  useState,
  forwardRef,
  MutableRefObject,
  InputHTMLAttributes
} from 'react'
import clsx from 'clsx'

import styles from './Input.module.scss'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, id, ...props }, input) => {
    const [labelLift, setLabelLift] = useState(false)

    const inputRef = input as MutableRefObject<HTMLButtonElement>

    const clickCallback = () => {
      setLabelLift(true)
      inputRef?.current.focus()
    }

    const labelLiftCheck = () => {
      if (inputRef?.current?.value === '') {
        inputRef.current?.blur()
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
