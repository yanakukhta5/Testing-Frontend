import { makeAutoObservable } from "mobx"

class Auth {
 username = localStorage.getItem("login")

 constructor(){
  makeAutoObservable(this)
 }

 get isAuthorized(){
  return Boolean(this.username)
 }

 login(login: string){
  this.username = login
  localStorage.setItem("login", login)
 }

 logout(){
  this.username = ''
  localStorage.removeItem("login")
 }
}

export const auth = new Auth()