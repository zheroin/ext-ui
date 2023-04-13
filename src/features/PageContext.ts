import React from "react"

import type { DataPage } from "./PageTypes"

export interface IPageContext {
  page: DataPage
  setPage: (page: DataPage) => void
}

export const PageContext = React.createContext<IPageContext>({
  page: "ecommerce",
  setPage: () => {}
})
