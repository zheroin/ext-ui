import { useContext, useEffect } from "react"

import { ThemeContext } from "./ThemeContext"
import type { DataTheme } from "./Themetypes"

export const useTheme = (value?: DataTheme) => {
  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    if (value && theme !== value) {
      setTheme(value)
    }
  }, [value])

  return { theme, setTheme }
}
