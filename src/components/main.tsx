import React from "react"

import { usePage } from "~src/features/usePage"
import { useUser } from "~src/features/useUser"

import Top from "./Top"
import Clients from "./clients"
import Setting from "./setting"

const Page = () => {
  const { page } = usePage()
  const { email, password, apikey } = useUser()
  console.log(
    `content: ${page} \n email: ${email}\n password: ${password}\n apikey: ${apikey}`
  )
  return (() => {
    switch (page) {
      case "clients":
        return <Clients />
      case "setting":
        return <Setting />
      default:
        return <Top />
    }
  })()
}
export default Page
