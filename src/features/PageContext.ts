import React from "react"

import type { DEFAULT_PAGES } from "./Pagetypes"

export type DataPage = (typeof DEFAULT_PAGES)[number] | string
export interface IPageContext {
  page: DataPage
  setPage: (page: DataPage) => void
}

export const PageContext = React.createContext<IPageContext>({
  page: "clients",
  setPage: () => {}
})
