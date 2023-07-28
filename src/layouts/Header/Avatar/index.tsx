import { Dispatch, FC, SetStateAction, useState } from 'react'

import { auth } from '@/store'

import { Menu } from './Menu'
import styles from './Avatar.module.scss'

type AvatarProps = {
  setAuthModal: Dispatch<SetStateAction<boolean>>
}

export const Avatar: FC<AvatarProps> = ({ setAuthModal }) => {
  const [open, setOpen] = useState(false)

  const mouseEnterHandler = () => {
    setOpen(true)
  }

  const mouseLeaveHandler = () => {
    setOpen(false)
  }

  const fistLetter = auth.username?.charAt(0)

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className={styles.wrapper}
    >
      <div className={styles.avatar}>
        <p className={styles.inicials}>{fistLetter}</p>

        <Menu open={open} setAuthModal={setAuthModal} />
      </div>
    </div>
  )
}
