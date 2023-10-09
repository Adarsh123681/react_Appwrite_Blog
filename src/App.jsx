
import LogIn from "./assets/Appwrite/LogIn"
import AllBlog from "./assets/Appwrite/AllBlog"
import SignUp from './assets/Appwrite/SignUp'
import Navbar from './assets/Appwrite/Navbar'
import About from "./assets/Appwrite/About"
import AddBlog from "./assets/Appwrite/AddBlog"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={< AddBlog />} />
          <Route path="/allBlog" element={<AllBlog />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
