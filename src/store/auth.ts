import { makeAutoObservable } from 'mobx'

class Auth {
  username = localStorage.getItem('login')

  constructor() {
    makeAutoObservable(this)
  }

  get isAuthorized() {
    return Boolean(this.username)
  }

  login(login: string, isRemember: boolean) {
    if (isRemember) localStorage.setItem('login', login)
    this.username = login
  }

  logout() {
    this.username = ''
    localStorage.removeItem('login')
  }
}

export const auth = new Auth()
