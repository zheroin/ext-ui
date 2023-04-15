import React from "react"

const email = window.localStorage.getItem("user-email")
const password = window.localStorage.getItem("user-password")
const apikey = window.localStorage.getItem("user-apikey")
type DataEmail = typeof email | string
type DataPassword = typeof password | string
type DataAPIkey = typeof apikey | string
export interface IUserContext {
  email: DataEmail
  setEmail: (email: DataEmail) => void
  password: DataPassword
  setPassword: (password: DataPassword) => void
  apikey: DataAPIkey
  setAPIkey: (apikey: DataAPIkey) => void
}

export const UserContext = React.createContext<IUserContext>({
  email: email,
  setEmail: () => {},
  password: password,
  setPassword: () => {},
  apikey: apikey,
  setAPIkey: () => {}
})
