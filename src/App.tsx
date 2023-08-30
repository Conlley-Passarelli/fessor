import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import './assets/styles/global.css'

export function App() {
  return (
    <RouterProvider router={router} />
  )
}
