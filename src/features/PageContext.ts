import React from "react"

import { defaultPage } from "~src/constants"

import type { DataPage } from "./PageTypes"

export interface IPageContext {
  page: DataPage
  setPage: (page: DataPage) => void
}

export const PageContext = React.createContext<IPageContext>({
  page: defaultPage,
  setPage: () => {}
})
