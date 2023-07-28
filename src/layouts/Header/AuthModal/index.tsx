import { CSSProperties, Dispatch, FC, SetStateAction } from 'react'

import { Modal } from '@/components'
import { Form } from './Form'
import { Close } from '@/assets/svg'
import { useDelayUnmount } from '@/hooks'

import styles from './AuthModal.module.scss'

type AuthModalProps = {
  style: CSSProperties
  setOpen: Dispatch<SetStateAction<boolean>>
  shouldRender: boolean
  mount: boolean
}

const mountedStyle = { animation: `${styles.inAnimation} 200ms ease-in` }
const unmountedStyle = { animation: `${styles.outAnimation} 250ms ease-in` }

export const AuthModal: FC<AuthModalProps> = ({
  setOpen,
  mount,
  shouldRender,
  ...props
}) => {
  const shouldRenderChild = useDelayUnmount(shouldRender, 250)

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

          <Form />
        </div>
      )}
    </Modal>
  )
}
