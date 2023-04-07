import cssText from "data-text:~src/style.css"
import type { PlasmoCSConfig } from "plasmo"

import { CountButton } from "~src/features/count-button"

import "~src/base.css"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return (
    <div className="z-50 flex fixed top-32 right-8">
      <CountButton />
    </div>
  )
}

export default PlasmoOverlay
