
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";

import logo from '../assets/logo.png'

export default function Navbar() {
  return <div className="sticky top-0 z-[999]">
       <Header className="bg-slate-50" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" >
          <Link to={'/'}>
          <img src={logo} alt="" className="w-14" />
          </Link>
        </div>
          <ul className="flex justify-end w-full  font-semibold  ">
            <Link to={'/all-books'} className="hover:bg-slate-100 px-6  cursor-pointer   inline-block">All Books</Link>
            <Link to={'/signup'} className="hover:bg-slate-100 px-6 cursor-pointer  inline-block">Sign Up</Link>
            <Link to={'/signin'} className="hover:bg-slate-100 px-6 cursor-pointer  inline-block">Sign In</Link>
          </ul>
        
      </Header>
  </div>;
}
