import React from "react"

import ThemeComponent from "~src/components/themeSelect"
import { SidebarContext } from "~src/features/SidebarContext"
import { usePage } from "~src/features/usePage"

import List from "./pagelist"

export const Close = () => {
  return (
    <SidebarContext.Consumer>
      {({ opened, setOpened }) => (
        <li title="Close Sidebar">
          <a
            onClick={() => setOpened(!opened)}
            className="btn gap-1 normal-case btn-ghost flex-grow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 18L18 6M6 6l12 12"
              />
            </svg>
          </a>
        </li>
      )}
    </SidebarContext.Consumer>
  )
}
export const Home = () => {
  return (
    <li title="Home">
      <a className="btn gap-1 normal-case btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </a>
    </li>
  )
}
export const Setting = () => {
  const { setPage } = usePage()
  return (
    <li title="Setting">
      <a
        className="btn gap-1 normal-case btn-ghost"
        onClick={() => setPage("setting")}>
        <svg
          fill="none"
          className="h-5 w-5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <path d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"></path>
        </svg>
      </a>
    </li>
  )
}
export const Info = () => {
  return (
    <li title="Information">
      <a className="btn gap-1 normal-case btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      </a>
    </li>
  )
}
export const Lang = () => {
  return (
    <li title="Language">
      <a className="btn gap-1 normal-case btn-ghost">
        <svg
          fill="none"
          stroke="currentColor"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <path d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"></path>
        </svg>
      </a>
    </li>
  )
}
export const NavbarList = () => {
  return (
    <>
      <List />
      <ThemeComponent />
      <Lang />
      <Home />
      <Info />
      <Setting />
      <Close />
    </>
  )
}
export default NavbarList
