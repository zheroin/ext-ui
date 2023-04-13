import type { DEFAULT_PAGES } from "./defaultPages"

export type DataPage = (typeof DEFAULT_PAGES)[number] | string
export interface IPageBaseProps {
  dataPage?: DataPage
}
