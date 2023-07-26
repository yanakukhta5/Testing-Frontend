import { FC, HTMLAttributes } from 'react'

import { createPortal } from 'react-dom'

import styles from './Modal.module.scss'

const portal = document.querySelector('#portal')

type ContentProps = HTMLAttributes<HTMLDivElement>

const Content: FC<ContentProps> = (props) => {
 return (
  <div className={styles.overlay} {...props} />
 )
}

export const Modal = (props: ContentProps) => 
 createPortal(<Content {...props} />, portal as Element)