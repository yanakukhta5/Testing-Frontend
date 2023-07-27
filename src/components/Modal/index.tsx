import { FC, HTMLAttributes } from 'react'
import { createPortal } from 'react-dom'

import styles from './Modal.module.scss'

type ContentProps = HTMLAttributes<HTMLDivElement> & {
 open: boolean
 setOpen: (open: boolean) => void
}

const portal = document.querySelector('#portal')

const Content: FC<ContentProps> = (props) => {

 return (
  <div className={styles.overlay} {...props}/>
 )
}

export const Modal = (props: ContentProps) => 
 createPortal(<Content {...props} />, portal as Element)