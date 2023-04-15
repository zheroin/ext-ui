import { Children, useEffect, useState } from "react"

import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {
  const iemail = window.localStorage.getItem("user-email") || ""
  const ipassword = window.localStorage.getItem("user-password") || ""
  const iapikey = window.localStorage.getItem("user-apikey") || ""
  const [email, setEmail] = useState(iemail)
  const [password, setPassword] = useState(ipassword)
  const [apikey, setAPIkey] = useState(iapikey)
  const handleEmail = (email: string) => {
    setEmail(email)
  }
  const handlePassword = (password: string) => {
    setPassword(password)
  }
  const handleAPIkey = (apikey: string) => {
    setAPIkey(apikey)
  }
  useEffect(() => {
    if (iemail !== email) {
      iemail && handleEmail(email)
    }
  }, [iemail])
  useEffect(() => {
    if (ipassword !== password) {
      ipassword && handlePassword(password)
    }
  }, [ipassword])
  useEffect(() => {
    if (iapikey !== apikey) {
      iapikey && handleAPIkey(apikey)
    }
  }, [iapikey])
  const value = {
    email,
    setEmail: handleEmail,
    password,
    setPassword: handlePassword,
    apikey,
    setAPIkey: handleAPIkey
  }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
