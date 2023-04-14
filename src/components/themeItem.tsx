import React from "react"
import { twMerge } from "tailwind-merge"

import "../base.css"
import "../style.css"

export type ThemeItemProps = React.HTMLAttributes<HTMLDivElement> & {
  dataTheme: string
  selected?: boolean
}

const ThemeItem = ({
  children,
  dataTheme,
  className,
  ...props
}: ThemeItemProps) => {
  const classes = twMerge(
    className,
    "border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border form-control"
  )
  return (
    <div {...props} data-theme={dataTheme} className={classes}>
      <div
        data-theme={dataTheme}
        className="bg-base-100 text-base-content w-full cursor-pointer font-sans ">
        <div className="grid grid-cols-5 grid-rows-3">
          <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3 ">
              <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
            </svg>
            <div className="flex-grow text-sm font-bold">{dataTheme}</div>
            <div className="flex flex-shrink-0 flex-wrap gap-1 h-full preview">
              <div className="bg-primary w-2 rounded"></div>
              <div className="bg-secondary w-2 rounded"></div>
              <div className="bg-accent w-2 rounded"></div>
              <div className="bg-neutral w-2 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ThemeItem
