import { CiSearch } from "react-icons/ci";
import Button from "./components/buttons/CommonButton";
import CommonButton from "./components/buttons/CommonButton";
import { LuCircleHelp } from "react-icons/lu";
import { RouterProvider } from "react-router-dom";
import { routing } from "./@core/routing/Routing";

function App() {
  return (
    <RouterProvider router={routing}/>
  );
}

export default App;
