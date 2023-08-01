import React from "react"
import "tailwindcss/lib/css/preflight.css"
import { RouterProvider } from 'react-router-dom';

import IndexRoutes from './routes';

const routes = IndexRoutes()

function App() {

  return (
      <RouterProvider router={routes} />
  )
}

export default App