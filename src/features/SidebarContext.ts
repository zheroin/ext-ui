import React from "react"

export interface ISidebarContext {
  opened: boolean
  setOpened: (theme: boolean) => void
}
export const SidebarContext = React.createContext<ISidebarContext>({
  opened: false,
  setOpened: () => {}
})
