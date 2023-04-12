import React, { MutableRefObject, useEffect, useRef, useState } from "react"

import { defaultTheme } from "../constants"
import { getThemeFromClosestAncestor } from "../theme/utils"
import type { DataTheme, IComponentBaseProps } from "../types"
import { ThemeContext } from "./ThemeContext"

export type ThemeProps = Omit<React.HTMLAttributes<HTMLDivElement>, ""> &
  IComponentBaseProps & {
    onClick?: (theme: DataTheme) => void
  }

const Theme = React.forwardRef<HTMLDivElement, ThemeProps>(
  ({ children, dataTheme, onClick, className, ...props }, ref): JSX.Element => {
    // Either use provided ref or create a new ref
    const themeRef = useRef<HTMLDivElement>(
      (ref as MutableRefObject<HTMLDivElement>)?.current
    )

    const closestAncestorTheme = getThemeFromClosestAncestor(themeRef)

    // If no theme is provided, use the closest ancestor theme, if no ancestor theme, fallback to default theme (defined in constants)
    const [theme, setTheme] = useState<DataTheme>(
      dataTheme || closestAncestorTheme || defaultTheme
    )

    const handleThemeChange = (theme: DataTheme) => {
      // Fire custom onChange, if provided. ie, user provided function to store theme in session/local storage
      onClick && onClick(theme)
      // Update state/context

      setTheme(theme)
    }

    // Properly handle changes to theme prop on Theme component
    useEffect(() => {
      if (dataTheme !== theme) {
        dataTheme && handleThemeChange(theme)
      }
    }, [dataTheme])

    return (
      <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
        <div {...props} data-theme={theme} className={className} ref={themeRef}>
          {children}
        </div>
      </ThemeContext.Provider>
    )
  }
)
export default Theme
