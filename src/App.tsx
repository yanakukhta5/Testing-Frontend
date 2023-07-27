import { FC } from 'react'

import style from './App.module.scss'
import { Header, Catalog } from '@/layouts'

export const App: FC = () => {
  return (
    <div className={style.app}>
      <div className={style.container}>
        <Header />
        
        <Catalog />
      </div>
    </div>
  )
}