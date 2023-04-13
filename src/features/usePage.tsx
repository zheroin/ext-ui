import { useContext, useEffect } from "react"

import { PageContext } from "./PageContext"
import type { DataPage } from "./PageTypes"

export const usePage = (value?: DataPage) => {
  const { page, setPage } = useContext(PageContext)

  useEffect(() => {
    if (value && page !== value) {
      setPage(value)
    }
  }, [value])

  return { page, setPage }
}
