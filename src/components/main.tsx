import React from "react"

import { usePage } from "~src/features/usePage"

import Top from "./Top"
import Clients from "./clients"
import Setting from "./setting"

const Page = () => {
  const { page } = usePage()
  console.log(`content: ${page}`)
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
