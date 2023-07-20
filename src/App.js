import React, { useEffect, useState } from "react"
import "tailwindcss/lib/css/preflight.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Login from "views/login/Login"
import { StyleReset, Icon } from "atomize"

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/api/main')
        .then(response => response.text())
        .then(data => setData(data))
        .catch(error => console.error(error));
  }, []);

  return (
    <AnimationRevealPage>

      <Login data={data}/>
      {/* <StyleReset /> */}
      {/* <Icon name="Add" size="10px" /> */}
    </AnimationRevealPage>

  )
}

export default App