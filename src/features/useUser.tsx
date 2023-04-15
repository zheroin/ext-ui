import { useContext, useEffect } from "react"

import { UserContext } from "./UserContext"

export const useUser = (value?: string) => {
  const { email, setEmail, password, setPassword, apikey, setAPIkey } =
    useContext(UserContext)

  useEffect(() => {
    if (value && email !== value) {
      setEmail(value)
    }
  }, [value])
  useEffect(() => {
    if (value && password !== value) {
      setPassword(value)
    }
  }, [value])
  useEffect(() => {
    if (value && apikey !== value) {
      setAPIkey(value)
    }
  }, [value])

  return { email, setEmail, password, setPassword, apikey, setAPIkey }
}
