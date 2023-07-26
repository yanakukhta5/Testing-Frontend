import { FC } from 'react'

import style from './App.module.scss'
import { Header, List } from '@/layouts'

export const App: FC = () => {
  return (
    <div className={style.app}>
      <div className={style.container}>
        <Header />
        
        <List />
      </div>
    </div>
  )
}