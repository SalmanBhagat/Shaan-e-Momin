import { createBrowserRouter } from "react-router-dom"
import Login from "../../pages/login/Login"

export const routing = createBrowserRouter([
    {path: "", element: <Login/>},
    {path: "/login", element: <Login/>},
])