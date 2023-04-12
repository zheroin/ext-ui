import React, { useState } from "react"

import { SidebarContext } from "./SidebarContext"

const SidebarProvider = ({ children }) => {
  const [opened, setOpened] = useState(false)
  const handleSidebar = (opened: boolean) => {
    setOpened(!opened)
  }
  const value = { opened, setOpened: handleSidebar }
  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  )
}
export default SidebarProvider
