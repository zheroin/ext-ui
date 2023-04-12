import "../src/base.css"

import cssText from "data-text:../src/style.css"
import type { PlasmoCSConfig } from "plasmo"
import { BrowserRouter } from "react-router-dom"

import App from "~src/App"

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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default PlasmoOverlay
