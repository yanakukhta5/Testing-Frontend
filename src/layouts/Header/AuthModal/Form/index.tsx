import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'

import { Button, Input, Checkbox } from '@/components'
import { auth } from '@/store'

import styles from './Form.module.scss'

type FormValues = {
  login: string
  password: string
  rememberUser: boolean
}

const textInputRules = {
  required: 'Please enter data',
  pattern: {
    value: /^[a-zA-Z0-9_]+$/,
    message:
      'Invalid data: only english letters, numbers and underscore allowed'
  },
  maxLength: {
    value: 40,
    message: 'Min length is 40'
  },
  minLength: {
    value: 8,
    message: 'Min length is 8'
  }
}

export const Form: FC = observer(() => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FormValues>({ mode: 'onBlur' })

  const submitHandler = (data: FormValues) => {
    data.rememberUser = Boolean(data.rememberUser)
    auth.login(data.login, data.rememberUser)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
      <Controller
        control={control}
        rules={textInputRules}
        name="login"
        shouldUnregister={true}
        render={({ field }) => {
          return (
            <Input
              {...field}
              autoComplete="off"
              id="login"
              className={styles.input}
              label="Login"
            />
          )
        }}
      />
      {errors.login && <p className={styles.error}>{errors.login.message}</p>}

      <Controller
        control={control}
        name="password"
        rules={textInputRules}
        shouldUnregister={true}
        render={({ field }) => {
          return (
            <Input
              {...field}
              autoComplete="off"
              id="password"
              className={styles.input}
              label="Password"
            />
          )
        }}
      />
      {errors.password && (
        <p className={styles.error}>{errors.password.message}</p>
      )}

      <Controller
        control={control}
        name="rememberUser"
        render={({ field }) => {
          return (
            <Checkbox
              {...field}
              id="checkbox"
              label="Remember me on next login"
            />
          )
        }}
      />

      <Button className={styles.submit} type="submit">
        Sign In
      </Button>
    </form>
  )
})
