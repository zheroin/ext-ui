import React, { MutableRefObject, useEffect, useRef, useState } from "react"

import { defaultPage } from "~src/constants"

import { PageContext } from "./PageContext"
import type { DataPage, IPageBaseProps } from "./PageTypes"

export type PageProps = Omit<React.HTMLAttributes<HTMLDivElement>, "onClick"> &
  IPageBaseProps & { onClick?: (page: DataPage) => void }

export const getPageFromClosestAncestor = (
  ref: React.RefObject<HTMLElement>
) => {
  if (!ref.current) return
  const matches = ref.current.closest("[data-page]")
  if (matches) return matches.getAttribute("data-page")
}

const Page = React.forwardRef<HTMLDivElement, PageProps>(
  ({ children, dataPage, onClick, className, ...props }, ref): JSX.Element => {
    const pageRef = useRef<HTMLDivElement>(
      (ref as MutableRefObject<HTMLDivElement>)?.current
    )
    const closestAncestorPage = getPageFromClosestAncestor(pageRef)
    dataPage = window.localStorage.getItem("active-page")
    const [page, setPage] = useState<DataPage>(
      dataPage || closestAncestorPage || defaultPage
    )
    const handlePageChange = (page: DataPage) => {
      onClick && onClick(page)
      setPage(page)
    }

    useEffect(() => {
      if (dataPage !== page) {
        dataPage && handlePageChange(dataPage)
      }
    }, [dataPage])

    return (
      <PageContext.Provider value={{ page, setPage: handlePageChange }}>
        <div {...props} data-page={page} className={className} ref={pageRef}>
          {children}
        </div>
      </PageContext.Provider>
    )
  }
)

export default Page
