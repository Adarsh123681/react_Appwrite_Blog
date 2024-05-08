
import LogIn from "./assets/Appwrite/LogIn"
import AllBlog from "./assets/Appwrite/AllBlog"
import SignUp from './assets/Appwrite/SignUp'
import CreateBlog from "./assets/Appwrite/CreateBlog"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PasswordRecovery from "./assets/Appwrite/PasswordRecovery"
import NavbarHead from "./assets/Appwrite/NavbarHead"
import SearchBlog from "./assets/Appwrite/searchBlog"
import PasswordReset from "./assets/Appwrite/PasswordReset"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavbarHead />
        <Routes>
          <Route path="/" element={< LogIn />} />
          <Route path="/allBlog" element={<AllBlog />} />
          <Route path="/createBlog" element={<CreateBlog />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/passwordRecovery" element={<PasswordRecovery />} />
          <Route path="/searchBlog" element={<SearchBlog />} />
          <Route path="/passwordReset" element={<PasswordReset />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
