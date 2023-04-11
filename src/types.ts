import {
  bgColors,
  brandColors,
  componentColors,
  componentPositions,
  componentShapes,
  componentSizes,
  componentStatuses
} from "./constants"
import { DEFAULT_THEMES } from "./theme/defaultThemes"

export type DataTheme = (typeof DEFAULT_THEMES)[number] | string

export interface IComponentBaseProps {
  dataTheme?: DataTheme
}

export type ComponentColor = (typeof componentColors)[number]

export type ComponentPosition = (typeof componentPositions)[number]
export type ComponentShape = (typeof componentShapes)[number]
export type ComponentSize = (typeof componentSizes)[number]
export type ComponentStatus = (typeof componentStatuses)[number]
export type ComponentBrandColors = (typeof brandColors)[number]
export type ComponentBgColors = (typeof bgColors)[number]
