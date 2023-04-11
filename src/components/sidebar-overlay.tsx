import React from "react"

import Overlay from "~src/components/overlay"
import ToggleButton from "~src/components/toggle"
import ThemeProvider from "~src/features/ThemeProvider"
import { useSidebar } from "~src/features/useSidebar"

import "../../src/base.css"
import "../../src/style.css"

export const Sidebar = () => {
  const { opened } = useSidebar()
  return (
    <>
      <ToggleButton />
      {opened ? (
        <ThemeProvider>
          <Overlay />
        </ThemeProvider>
      ) : (
        <ToggleButton />
      )}
    </>
  )
}
export default Sidebar
