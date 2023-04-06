import { useReducer } from "react"

import "./style.css"

function IndexPopup() {
  const [count, increase] = useReducer((c) => c + 1, 0)

  return <div className="artboard artboard-demo phone-3">414×736</div>
}

export default IndexPopup
