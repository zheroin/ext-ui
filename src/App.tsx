import React from "react"

import Sidebar from "~src/components/sidebar-overlay"

import SidebarProvider from "./features/SidebarProvider"

export const App = () => {
  return (
    <>
      <SidebarProvider>
        <Sidebar />
      </SidebarProvider>
    </>
  )
}

export default App
