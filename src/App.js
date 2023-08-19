import React from "react"
import "tailwindcss/lib/css/preflight.css"
import { RouterProvider } from 'react-router-dom';

import IndexRoutes from './routes';
import axiosSetup from "./utils/axiosSetup";

const routes = IndexRoutes()

function App() {
    axiosSetup();

  return (
      <RouterProvider router={routes} />
  )
}

export default App