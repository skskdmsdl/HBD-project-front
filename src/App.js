import React, { useEffect, useState } from "react"
import "tailwindcss/lib/css/preflight.css"
import { StyleReset, Icon } from "atomize"
import { RouterProvider } from 'react-router-dom';

import IndexRoutes from './routes';

function App() {

  return (
    <RouterProvider router={IndexRoutes()} />
  )
}

export default App