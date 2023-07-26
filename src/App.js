import React, { useEffect, useState } from "react"
import "tailwindcss/lib/css/preflight.css"
import { StyleReset, Icon } from "atomize"
import { RouterProvider } from 'react-router-dom';

import IndexRoutes from './routes';

const routes = IndexRoutes();

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/api/main')
        .then(response => response.text())
        .then(data => setData(data))
        .catch(error => console.error(error));
  }, []);

  return (
    <RouterProvider router={routes} />
  )
}

export default App