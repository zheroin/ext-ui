import { createContext } from "react"

export interface ISidebarContext {
  opened: boolean
  setOpened: (theme: boolean) => void
}
export const SidebarContext = createContext<ISidebarContext>({
  opened: false,
  setOpened: () => {}
})
