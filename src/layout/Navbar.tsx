import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logOut } from "../app/user/userSlice";
import toast from "react-hot-toast";

export default function Navbar() {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.auth);

  const handleLogOut = () => {
    dispatch(logOut())
    localStorage.removeItem('accessToken');
    toast.success('Logout success', { id: 'logout' })
  }
  return (
    <div className="sticky top-0 z-[99]">
      <Header
        className="bg-slate-50"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="demo-logo">
          <Link to={"/"}>
            <img src={logo} alt="" className="w-14" />
          </Link>
        </div>
        <ul className="flex justify-end w-full  font-semibold  ">
          <Link
            to={"/all-books"}
            className="hover:bg-slate-100 px-6 z-[999]  cursor-pointer   inline-block"
          >
            All Books
          </Link>
          {!user?._id ? (
            <>
              <Link
                to={"/signup"}
                className="hover:bg-slate-100 px-6 cursor-pointer  inline-block"
              >
                Sign Up
              </Link>
              <Link
                to={"/signin"}
                className="hover:bg-slate-100 px-6 cursor-pointer  inline-block"
              >
                Sign In
              </Link>{" "}
            </>
          ) : (
            <p onClick={handleLogOut} className="hover:bg-slate-100 px-6 cursor-pointer  inline-block">
              Logout
            </p>
          )}
        </ul>
      </Header>
    </div>
  );
}
