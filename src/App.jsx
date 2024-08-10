import { createBrowserRouter, RouterProvider} from "react-router-dom"
import {Pag } from "./pages/Pag"

const router = createBrowserRouter ([
  {

   path: "/",
   element: <Pag/>

  }
])
function App() {
  return (
    <div>App</div>
  )
}

export default App