import { FC, useState, useCallback } from 'react'
import clsx from 'clsx'

import { auth } from '@/store'

import styles from './Avatar.module.scss'

export const Avatar: FC = () => {
 const [open, setOpen] = useState(false)

 const mouseEnterHandler = useCallback(() => {
  setOpen(true)
 }, [])

  const mouseLeaveHandler = useCallback(() => {
  setOpen(false)
 }, [])

 const logoutHandler = useCallback(() => {
  auth.logout()
 }, [])

 return (
  <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className={styles.wrapper}>
   <div className={styles.avatar}>
    <p className={styles.inicials}>AA</p>
    <div className={clsx(styles.menu, {[styles.menuActive]: open })}>
     <ul>
      <li className={clsx(styles.listItem, styles.personData)}>{auth.username}</li>
      <li className={clsx(styles.listItem, styles.logout)} onClick={logoutHandler}>logout</li>
     </ul>
    </div>
   </div>
  </div>
 )
}