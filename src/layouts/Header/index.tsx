import { FC, useState } from 'react'

import { Button } from '@/components'
import { AuthModal } from './AuthModal'
import styles from './Header.module.scss'

export const Header: FC = () => {
 const [modalShow, setModalShow] = useState<boolean>(false)
 return (
  <header className={styles.header}>

   <Button onClick={() => setModalShow(true)}>Sign In</Button>
   
   { modalShow && <AuthModal open={modalShow} setOpen={setModalShow as () => void} /> }
   
  </header>
 )
}