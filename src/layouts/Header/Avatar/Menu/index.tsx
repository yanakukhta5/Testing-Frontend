import { Dispatch, FC, SetStateAction } from 'react'
import clsx from 'clsx'

import { auth } from '@/store'

import styles from './Menu.module.scss'

type MenuProps = {
  open: boolean
  setAuthModal: Dispatch<SetStateAction<boolean>>
}

export const Menu: FC<MenuProps> = ({ open, setAuthModal }) => {
  const logoutHandler = () => {
    auth.logout()
    setAuthModal(false)
  }

  return (
    <div className={clsx(styles.menu, { [styles.active]: open })}>
      <ul>
        <li className={styles.personData}>{auth.username}</li>

        <li className={styles.logout} onClick={logoutHandler}>
          logout
        </li>
      </ul>
    </div>
  )
}
