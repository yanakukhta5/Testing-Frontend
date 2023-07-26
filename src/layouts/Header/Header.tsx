import { FC, useState } from 'react'

import { Button, Modal } from '@/components'
import styles from './Header.module.scss'

export const Header: FC = () => {
 const [modalShow, setModalShow] = useState<boolean>(false)
 return (
  <header className={styles.header}>

   <Button onClick={() => setModalShow(true)}>Sign In</Button>
   
   { modalShow && <Modal>
     <div className={styles.modal}>
      kjhkjhjk
     </div>
    </Modal> }
   
  </header>
 )
}