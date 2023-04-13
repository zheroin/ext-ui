import React from "react"

import { useTheme } from "../features/useTheme"
import { DEFAULT_THEMES } from "../theme/defaultThemes"
import ThemeItem from "./themeItem"

function ThemeComponent() {
  const { theme, setTheme } = useTheme()
  return (
    <li title="Change Theme" className="dropdown dropdown-start relative">
      <a tabIndex={0} className="btn gap-1 normal-case btn-ghost">
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
        </svg>
        <span className="hidden md:inline">Theme</span>
        <svg
          width="12px"
          height="12px"
          className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048">
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </a>
      <div
        tabIndex={0}
        className="dropdown-content bg-base-100 p-2 text-base-content w-52 shadow-2xl">
        <div className="grid grid-cols-1 gap-3  items-start overflow-auto w-full max-h-96">
          {DEFAULT_THEMES.map((t, i) => (
            <ThemeItem
              key={`theme_${t}_#${i}`}
              data-theme={t}
              dataTheme={t}
              role="button"
              aria-label="Theme select"
              aria-pressed={t === theme}
              tabIndex={0}
              onClick={() => {
                document
                  .getElementsByTagName("html")[0]
                  .setAttribute("data-theme", t)
                window.localStorage.setItem("extension-sidebar-theme", t)
                setTheme(t)
              }}
            />
          ))}
        </div>
      </div>
    </li>
  )
}

export default ThemeComponent
