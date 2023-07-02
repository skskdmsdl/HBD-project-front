import React from "react"
import "tailwindcss/lib/css/preflight.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/FullWidthWithImage"
import { StyleReset, Icon } from "atomize"


function App() {
  return (
    <AnimationRevealPage>
      <Hero />
      {/* <StyleReset /> */}
      <Icon name="Add" size="10px" />
    </AnimationRevealPage>

  )
}

export default App