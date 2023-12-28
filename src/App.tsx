import { Toaster } from "react-hot-toast"
import Footer from "./layout/Footer"
import Layout from "./layout/Layout"
import Navbar from "./layout/Navbar"


function App() {
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
