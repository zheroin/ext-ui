import cssText from "data-text:~src/style.css"
import type { PlasmoCSConfig } from "plasmo"

import SidebarToggle from "~src/features/sidebar-overlay"

import "~src/base.css"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return (
    <div className="z-50 flex fixed bottom-10 right-0">
      <SidebarToggle />
    </div>
  )
}

export default PlasmoOverlay
