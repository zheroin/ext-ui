import React, { useState } from "react"

import { PageContext } from "~src/features/PageContext"

import Top from "./Top"
import Clients from "./clients"

const Page = () => {
  return (
    <>
      <Top />
      <PageContext.Consumer>
        {({ page, setPage }) => {
          switch (page) {
            case "clients":
              return <Clients />
            default:
              break
          }
        }}
      </PageContext.Consumer>
    </>
  )
}
export default Page
