import { useState } from "react"

import { CountButton } from "./features/count-button"

import "react"
import "./base.css"
import "./style.css"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <>
      <article className="prose card card-compact bg-base-100 shadow-xl m-6 p-2 w-96">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
      </article>
    </>
  )
}

export default IndexPopup
