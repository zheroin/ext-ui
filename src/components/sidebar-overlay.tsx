import React, { useState } from "react"

import ThemeProvider from "~src/features/ThemeProvider"

import Layout from "./layout"
import Toggle from "./toggle"

import "../../src/base.css"
import "../../src/style.css"

import { PageContext } from "~src/features/PageContext"
import { SidebarContext } from "~src/features/SidebarContext"

export const Sidebar = () => {
  const [opened, setOpened] = useState(false)
  const [page, setPage] = useState("clients")
  const value = { opened, setOpened }
  const viewpage = { page, setPage }
  return (
    <SidebarContext.Provider value={value}>
      {value.opened ? (
        <ThemeProvider>
          <PageContext.Provider value={viewpage}>
            <Layout />
          </PageContext.Provider>
        </ThemeProvider>
      ) : (
        <Toggle />
      )}
    </SidebarContext.Provider>
  )
}

export default Sidebar
