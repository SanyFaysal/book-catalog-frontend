import { Toaster } from "react-hot-toast"
import Footer from "./layout/Footer"
import Layout from "./layout/Layout"
import Navbar from "./layout/Navbar"
import { getToken } from "./helpers/getToken"
import { useAppDispatch } from "./app/hooks"

import { fetchUser } from "./app/user/userSlice"


function App() {
  const dispatch = useAppDispatch()
  const token = getToken();
  if (token) {
    dispatch(fetchUser(token as string))
  }
  return (
    <>
      <Navbar />
      <Layout />
      <Footer />
      <Toaster />
    </>
  )
}

export default App
