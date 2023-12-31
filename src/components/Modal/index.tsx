import { FC, HTMLAttributes, useRef, MouseEventHandler } from 'react'
import { createPortal } from 'react-dom'

import styles from './Modal.module.scss'

type ContentProps = HTMLAttributes<HTMLDivElement> & {
  setOpen: (a: boolean) => void
}

const portal = document.querySelector('#portal')

const Content: FC<ContentProps> = ({ setOpen, ...props }) => {
  const overlay = useRef<HTMLDivElement | null>(null)

  const overlayClickHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === overlay.current) setOpen(false)
  }

  return (
    <div
      onMouseDown={overlayClickHandler}
      className={styles.overlay}
      ref={overlay}
      {...props}
    />
  )
}

export const Modal = (props: ContentProps) =>
  createPortal(<Content {...props} />, portal as Element)
