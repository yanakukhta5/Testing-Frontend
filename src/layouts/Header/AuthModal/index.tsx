import { FC, FormEventHandler, useCallback, useMemo } from 'react'
import { observer } from "mobx-react-lite"

import { Button, Modal, Input, Checkbox } from '@/components'
import { Close } from '@/assets/svg'
import { auth } from '@/store'
import { useDelayUnmount } from '@/hooks'

import styles from './AuthModal.module.scss'

type AuthModalProps = {
  style: any
  setOpen: (a: boolean) => void
  shouldRender: boolean
  mount: boolean
}

export const AuthModal: FC<AuthModalProps> = observer(({setOpen, mount, shouldRender, ...props}) => {

  const shouldRenderChild = useDelayUnmount(shouldRender, 250)

 const mountedStyle = useMemo(() => ({ animation: `${styles.inAnimation} 200ms ease-in` }), [])
 const unmountedStyle = useMemo(() => ({ animation: `${styles.outAnimation} 250ms ease-in` }), [])

  const submitHandler = useCallback((event: MouseEvent) => {
    event.preventDefault()
    if(auth.isAuthorized) auth.logout()
    else {
      auth.login("Yana")
    }
    setOpen(false)
  }, [])

 return (
  <Modal setOpen={setOpen} {...props} >
     { shouldRenderChild && <div className={styles.modal} style={mount ? mountedStyle : unmountedStyle } >
      
      <button className={styles.close}>
        <Close onClick={() => setOpen(false)} />
      </button>

      <h2 className={styles.title}>{auth.isAuthorized ? "Log Out" : 'Authorization'}</h2>
      
      <form className={styles.form} onSubmit={submitHandler as unknown as FormEventHandler<HTMLFormElement>}> 
        <Input required autoComplete="off" id="login" className={styles.input} label="Login" />
        <Input required autoComplete="off" id="password" className={styles.input} label="Password" />
        <Checkbox id='checkbox' label="Remember me on next login" />
       <Button className={styles.submit} type="submit">{auth.isAuthorized ? 'Sign Out' : 'Sign In'}</Button>
      </form>

     </div> }
    </Modal>
 )
})