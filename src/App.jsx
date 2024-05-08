
import LogIn from "./Appwrite/LogIn"
import AllBlog from "./Appwrite/AllBlog"
import SignUp from './Appwrite/SignUp'
import CreateBlog from "./Appwrite/CreateBlog"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PasswordRecovery from "./Appwrite/PasswordRecovery"
import NavbarHead from "./Appwrite/NavbarHead"
import SearchBlog from "./Appwrite/SearchBlog"
import PasswordReset from "./Appwrite/PasswordReset"

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
