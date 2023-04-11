import { useContext, useEffect } from "react"

import { SidebarContext } from "./SidebarContext"

export const useSidebar = (value?: boolean) => {
  const { opened, setOpened } = useContext(SidebarContext)

  useEffect(() => {
    if (value && opened !== value) {
      setOpened(!value)
    }
  }, [value])

  return { opened, setOpened }
}
