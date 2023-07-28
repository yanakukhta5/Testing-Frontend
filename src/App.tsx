import { FC } from 'react'

import { Header, Catalog } from '@/layouts'

import style from './App.module.scss'

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
