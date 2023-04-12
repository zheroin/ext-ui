import React, { useState } from "react"

import ThemeProvider from "~src/features/ThemeProvider"

import Layout from "./layout"
import Toggle from "./toggle"

import "../../src/base.css"
import "../../src/style.css"

import { SidebarContext } from "~src/features/SidebarContext"

export const Sidebar = () => {
  const [opened, setOpened] = useState(false)

  const value = { opened, setOpened }
  return (
    <SidebarContext.Provider value={value}>
      {value.opened ? (
        <ThemeProvider>
          <Layout />
        </ThemeProvider>
      ) : (
        <Toggle />
      )}
    </SidebarContext.Provider>
  )
}

export default Sidebar
