import { Outlet } from "react-router-dom";



export default function Layout() {
  return (
    <div className="mx-12  min-h-[75vh]">
      <Outlet />
    </div>
  )
}
