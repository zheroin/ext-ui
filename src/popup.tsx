import { useState } from "react"

import { CountButton } from "./features/count-button"

import "react"
import "./base.css"
import "./style.css"

// import { RandomTaskIframe } from "~src/features/iframe"

// export default function OptionsPage() {
//   return (
//     <div className="h-96 aspect-video drawer-side">
//       <h1>
//         Drive more conversions with next generation multi-channel sequences
//       </h1>
//       <p>
//         Multi-channel selling is effective, but it takes time to interact with
//         prospects via email+phone+social. Amplemarket streamlines this for you.
//         Say goodbye to all of your task notifications!
//       </p>
//     </div>
//   )
// }

//Plaso with popup

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div className="navbar bg-base-100 w-96">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default IndexPopup
