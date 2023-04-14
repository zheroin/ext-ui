import React, { useState } from "react"

import ThemeProvider from "~src/features/ThemeProvider"

import Layout from "./layout"
import Toggle from "./toggle"

import "../../src/base.css"
import "../../src/style.css"

import { defaultToggle } from "~src/constants"
import PageProvider from "~src/features/PageProvider"
import { SidebarContext } from "~src/features/SidebarContext"

export const Sidebar = () => {
  const [opened, setOpened] = useState(defaultToggle)
  const value = { opened, setOpened }

  return (
    <SidebarContext.Provider value={value}>
      {value.opened ? (
        <ThemeProvider>
          <PageProvider>
            <Layout />
          </PageProvider>
        </ThemeProvider>
      ) : (
        <Toggle />
      )}
    </SidebarContext.Provider>
  )
}

export default Sidebar
