import { createBrowserRouter } from "react-router-dom"
import Login from "../../pages/login/Login"
import SignUP from "../../pages/sign-up/SignUp"

export const routing = createBrowserRouter([
    {path: "", element: <Login/>},
    {path: "/login", element: <Login/>},
    {path: "/sign-up", element: <SignUP/>},
])