import React from "react"

import { usePage } from "~src/features/usePage"

import Top from "./Top"
import Clients from "./clients"

const Page = () => {
  const { page } = usePage()
  return (
    <>
      <Top />
      {(() => {
        switch (page) {
          case "clients":
            return <Clients />
          default:
            return null
        }
      })()}
    </>
  )
}
export default Page
