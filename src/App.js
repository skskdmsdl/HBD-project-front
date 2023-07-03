import React from "react"
import "tailwindcss/lib/css/preflight.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/FullWidthWithImage"
import Login from "pages/Login"
import { StyleReset, Icon } from "atomize"


function App() {
  return (
    <AnimationRevealPage>
      <Login />
      {/* <StyleReset /> */}
      {/* <Icon name="Add" size="10px" /> */}
    </AnimationRevealPage>

  )
}

export default App