import React, { useEffect, useState } from "react"
import "tailwindcss/lib/css/preflight.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Login from "views/Login"
import { StyleReset, Icon } from "atomize"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/api/main')
        .then(response => response.text())
        .then(data => setData(data))
        .catch(error => console.error(error));
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <AnimationRevealPage>
          <Login data={data}/>
          {/* <StyleReset /> */}
          {/* <Icon name="Add" size="10px" /> */}
        </AnimationRevealPage>
      </Switch>
    </BrowserRouter>

  )
}

export default App