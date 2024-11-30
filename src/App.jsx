import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
    <Navbar></Navbar>
    <div className="max-w-6xl mx-auto">
    <Outlet></Outlet>
    </div>
    </>
  )
}

export default App
