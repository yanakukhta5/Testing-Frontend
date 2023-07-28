import { CSSProperties, Dispatch, FC, SetStateAction } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'

import { Button, Modal, Input, Checkbox } from '@/components'
import { Close } from '@/assets/svg'
import { auth } from '@/store'
import { useDelayUnmount } from '@/hooks'

import styles from './AuthModal.module.scss'

type AuthModalProps = {
  style: CSSProperties
  setOpen: Dispatch<SetStateAction<boolean>>
  shouldRender: boolean
  mount: boolean
}

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

export const AuthModal: FC<AuthModalProps> = observer(
  ({ setOpen, mount, shouldRender, ...props }) => {
    const {
      handleSubmit,
      control,
      formState: { errors }
    } = useForm<FormValues>({ mode: 'onBlur' })

    const shouldRenderChild = useDelayUnmount(shouldRender, 250)

    const mountedStyle = { animation: `${styles.inAnimation} 200ms ease-in` }
    const unmountedStyle = { animation: `${styles.outAnimation} 250ms ease-in` }

    const submitHandler = (data: FormValues) => {
      data.rememberUser = Boolean(data.rememberUser)
      auth.login(data.login, data.rememberUser)
    }

    return (
      <Modal setOpen={setOpen} {...props}>
        {shouldRenderChild && (
          <div
            className={styles.modal}
            style={mount ? mountedStyle : unmountedStyle}
          >
            <button className={styles.close}>
              <Close onClick={() => setOpen(false)} />
            </button>

            <h2 className={styles.title}>Authorization</h2>

            <form
              className={styles.form}
              onSubmit={handleSubmit(submitHandler)}
            >
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
              {errors.login && (
                <p className={styles.error}>{errors.login.message}</p>
              )}

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
          </div>
        )}
      </Modal>
    )
  }
)
