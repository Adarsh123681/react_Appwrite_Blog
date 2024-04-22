
import LogIn from "./assets/Appwrite/LogIn"
import AllBlog from "./assets/Appwrite/AllBlog"
import SignUp from './assets/Appwrite/SignUp'  
import AddBlog from "./assets/Appwrite/AddBlog"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PasswordRecovery from "./assets/Appwrite/PasswordRecovery"
import NavbarHead from "./assets/Appwrite/NavbarHead"
import SearchBlog from "./assets/Appwrite/searchBlog"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavbarHead />
        <Routes>
          <Route path="/" element={< LogIn />} />
          <Route path="/allBlog" element={<AllBlog />} />
          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/signUp" element={<SignUp />} /> 
          <Route path="/passwordRecovery" element={<PasswordRecovery />} />
          <Route path="/searchBlog" element={<SearchBlog/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
