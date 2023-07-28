import { FC } from 'react'
import clsx from 'clsx'

import { auth } from '@/store'

import styles from './Menu.module.scss'

type MenuProps = {
  open: boolean
  setAuthModal: (a: boolean) => void
}

export const Menu: FC<MenuProps> = ({ open, setAuthModal }) => {
  const logoutHandler = () => {
    auth.logout()
    setAuthModal(false)
  }

  return (
    <div className={clsx(styles.menu, { [styles.menuActive]: open })}>
      <ul>
        <li className={clsx(styles.listItem, styles.personData)}>
          {auth.username}
        </li>

        <li
          className={clsx(styles.listItem, styles.logout)}
          onClick={logoutHandler}
        >
          logout
        </li>
      </ul>
    </div>
  )
}
