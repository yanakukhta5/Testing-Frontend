import { FC, HTMLAttributes, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'

import styles from './Modal.module.scss'

type ContentProps = HTMLAttributes<HTMLDivElement> & {
 setOpen: (a: boolean) => void
}

const portal = document.querySelector('#portal')

const Content: FC<ContentProps> = ({setOpen, ...props}) => {

 const overlay = useRef<HTMLDivElement | null>(null)

 const overlayClickHandler = useCallback((event: MouseEvent) => {
   if(event.target === overlay.current) setOpen(false)
  }, [])

 useEffect(() => {
  overlay.current?.addEventListener("mousedown", overlayClickHandler)

  return () => {
   overlay.current?.addEventListener("mousedown", overlayClickHandler)
  }
 }, [])

 return (
  <div className={styles.overlay} ref={overlay} {...props}/>
 )
}

export const Modal = (props: ContentProps) => 
 createPortal(<Content {...props} />, portal as Element)