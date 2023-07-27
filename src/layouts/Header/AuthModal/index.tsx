import { FC } from 'react'

import { Button, Modal, Input, Checkbox } from '@/components'
import { Close } from '@/assets/svg'

import styles from './AuthModal.module.scss'

type AuthModalProps = {
  open: boolean
  setOpen: () => void
}

export const AuthModal: FC<AuthModalProps> = ({open, setOpen}) => {
 return (
  <Modal open={open} setOpen={setOpen}>
     <div className={styles.modal}>
      
      <button className={styles.close}>
        <Close />
      </button>

      <h2 className={styles.title}>Authorization</h2>
      
      <form className={styles.form}> 
       <Input autocomplete="off" id="login" className={styles.input} label="Login" />
       <Input autocomplete="off" id="password" className={styles.input} label="Password" />
       <Checkbox id='checkbox' label="Remember me on next login" />
       <Button className={styles.submit} type="submit">Sign In</Button>
      </form>

     </div>
    </Modal>
 )
}