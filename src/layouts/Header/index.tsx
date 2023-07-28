import { FC, useState, useCallback, useMemo } from 'react'
import { observer } from 'mobx-react-lite'

import { auth } from '@/store'
import { Button } from '@/components'
import { useDelayUnmount } from '@/hooks'

import { AuthModal } from './AuthModal'
import { Avatar } from './Avatar'
import styles from './Header.module.scss'

export const Header: FC = observer(() => {
  const [isModalMounted, setIsModalMounted] = useState<boolean>(false)

  const shouldRenderChild = useDelayUnmount(
    isModalMounted && !auth.isAuthorized,
    200
  )

  const mountedStyle = useMemo(
    () => ({ animation: `${styles.inAnimation} 200ms ease-in` }),
    []
  )
  const unmountedStyle = useMemo(
    () => ({ animation: `${styles.outAnimation} 250ms ease-in` }),
    []
  )

  const buttonClickHandler = useCallback(() => {
    setIsModalMounted(true)
  }, [])

  return (
    <header className={styles.header}>
      {auth.isAuthorized ? (
        <Avatar setAuthModal={setIsModalMounted} />
      ) : (
        <Button onClick={buttonClickHandler}>Sign In</Button>
      )}

      {!auth.isAuthorized && shouldRenderChild && (
        <AuthModal
          mount={isModalMounted}
          shouldRender={shouldRenderChild}
          setOpen={setIsModalMounted as () => void}
          style={isModalMounted ? mountedStyle : unmountedStyle}
        />
      )}
    </header>
  )
})
