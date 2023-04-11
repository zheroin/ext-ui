import React, { useEffect, useState } from "react"

import { SidebarContext } from "./SidebarContext"

const SidebarProvider = (children) => {
  const [opened, setOpened] = useState(false)
  const handleSidebar = () => {
    setOpened(!opened)
  }
  return (
    <SidebarContext.Provider value={{ opened, setOpened: handleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}
export default SidebarProvider
