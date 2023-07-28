import { makeAutoObservable } from "mobx"

class Auth {
 user = {
  login: localStorage.getItem("login")
 }

 constructor(){
  makeAutoObservable(this)
 }

 get isAuthorized(){
  return Boolean(this.user.login)
 }

 login(login: string){
  this.user.login = login
  localStorage.setItem("login", login)
 }

 logout(){
  this.user.login = ''
  localStorage.removeItem("login")
 }
}

export const auth = new Auth()