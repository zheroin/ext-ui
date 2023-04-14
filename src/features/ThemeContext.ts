import React from "react"

import { defaultTheme } from "~src/constants"

import type { DataTheme } from "./Themetypes"

export interface IThemeContext {
  theme: DataTheme
  setTheme: (theme: DataTheme) => void
}

export const ThemeContext = React.createContext<IThemeContext>({
  theme: defaultTheme,
  setTheme: () => {}
})
