import React from "react"

import { usePage } from "~src/features/usePage"
import { PAGE_PICKER_LIST } from "~src/theme/consts"

import PageItem from "./pageitem"

function PageComponent() {
  const { setPage } = usePage()
  return (
    <li title="Change Content" className="dropdown dropdown-start relative ">
      <a tabIndex={0} className="btn gap-1 normal-case btn-ghost">
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </a>

      <div
        tabIndex={0}
        className="dropdown-content bg-base-100 p-2 text-base-content w-40 rounded-none shadow-2xl">
        <div className="grid grid-cols-1 gap-3 p-3 items-start ">
          {PAGE_PICKER_LIST.map((pg, index) => {
            return (
              <PageItem
                key={`page_${pg}_#${index}`}
                data-page={pg.key}
                dataPage={pg.key}
                namePage={pg.name}
                icon={pg.icon}
                onClick={() => {
                  window.localStorage.setItem("active-page", pg.key)
                  setPage(pg.key)
                }}
              />
            )
          })}
        </div>
      </div>
    </li>
  )
}
export default PageComponent
