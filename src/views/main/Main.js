import React from 'react';
import { StyleReset } from 'atomize';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/FullWidthWithImage"


const Main = () => {
  return (
    <AnimationRevealPage>
      <Hero />
    </AnimationRevealPage>
  );
}

export default Main;