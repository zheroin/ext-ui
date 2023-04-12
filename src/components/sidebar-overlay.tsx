import React, { useState } from "react"

import ThemeComponent from "~src/components/themeSelect"
// import Overlay from "~src/components/overlay"
// import ToggleButton from "~src/components/toggle"
import ThemeProvider from "~src/features/ThemeProvider"

import List from "./bodylist"

// import { useSidebar } from "~src/features/useSidebar"

import "../../src/base.css"
import "../../src/style.css"

export const Sidebar = () => {
  const [opened, setOpened] = useState(false)

  const Toggle = () => {
    return (
      <div>
        <button
          className="translate-x-9 hover:-translate-x-0 inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
          onClick={() => setOpened(!opened)}>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white">LOGO</span>
        </button>
      </div>
    )
  }
  const Overlay = () => {
    return (
      <div className="fixed top-0 h-screen right-0 min-w-96 drop-shadow-md md:drop-shadow-xl text-indigo-600">
        <div className="drawer drawer-mobile min-w-96 border-4 border-indigo-600 rounded-lg ">
          <div className="drawer-side menu p-0  text-base-content bg-base-100">
            <div className="navbar bg-base-100 p-0 h-6 relative rounded-lg drop-shadow-md flex">
              <div className="flex-auto">
                <ul className="menu p-0 menu-horizontal bg-base-100 space-x-2 rounded-box">
                  <li>
                    <a>
                      <List />
                    </a>
                  </li>
                  <li>
                    <a>
                      <ThemeComponent />
                    </a>
                  </li>
                  <li>
                    <a>
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
                  <li>
                    <a>
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
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a>
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
                  <li>
                    <a onClick={() => setOpened(!opened)}>
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      {opened ? (
        <ThemeProvider>
          <Overlay />
        </ThemeProvider>
      ) : (
        <Toggle />
      )}
    </>
  )
}
export default Sidebar
