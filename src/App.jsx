import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Ref } from "./pages/Ref"
import {  ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global.js"


import { theme } from "./styles/theme.js"

const router = createBrowserRouter ([
  {

   path: "/",
   element: <Ref/>

  }
])

export default function App() {
  return (
    <ThemeProvider theme={theme}>
       <RouterProvider router={router}/> 
       <GlobalStyle/>
       </ThemeProvider>
           
  )
}

