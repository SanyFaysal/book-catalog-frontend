import { Outlet } from "react-router-dom";



export default function Layout() {
  return (
    <div className="mx-12 my-3">
        <Outlet/>
    </div>
  )
}
