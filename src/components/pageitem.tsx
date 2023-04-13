import React from "react"

export type PageItemProps = React.HTMLAttributes<HTMLDivElement> & {
  namePage: string
  dataPage: string
  selected?: boolean
  icon: string
}
const PageItem = ({
  children,
  dataPage,
  namePage,
  className,
  icon,
  ...props
}: PageItemProps) => {
  return (
    <div {...props} className={className} data-page={dataPage}>
      <div data-page={dataPage}>
        <div className="flex items-center p-2  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <svg
            fill="none"
            stroke="currentColor"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path d={icon}></path>
          </svg>
          <span className="flex-1 ml-3 text-left whitespace-nowrap">
            {namePage}
          </span>
        </div>
      </div>
    </div>
  )
}
export default PageItem
