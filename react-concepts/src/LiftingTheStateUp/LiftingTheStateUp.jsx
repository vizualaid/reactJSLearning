import React from "react"
import { useState } from "react"
import { Child1Comp} from "./Child1Comp"
import {Child2Comp} from "./Child2Comp"

export const LiftingTheStateUp = () => {
  const [price, setPrice] = useState(0)
  const handleParentChange = newText => {
    setPrice(newText)
  }
  return (
    <div>
      <h2>Price of the football is 200 INR</h2>
      <Child2Comp
        handleParentChange={handleParentChange}
        price={price}
      ></Child2Comp>
      <Child1Comp price={price}></Child1Comp>
    </div>
  )
}
