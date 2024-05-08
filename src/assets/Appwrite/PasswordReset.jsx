import React, { useState } from 'react'
import { account} from "./AppwriteEndpoints";
import e from 'cors';

const PasswordReset = () => {
  const [user, setUser] = useState({
    userId: "",
    secretkey: "",
    password: ""
  })

  const handlechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handleClick = async () => { 
    const result = await account.updateRecovery(
      user.userId,
      user.secretkey,
      user.password
    ); 
    setUser(result)
  }
  return (
    <form action="post" className='w-screen h-screen '>
      <div className="flex flex-wrap flex-col justify-center items-centeralign-middle w-[20rem] h-[20rem] bg-yellow-100">
        <input type="text"  name='userId' value={user.userId} placeholder='Enter userId' onChange={handlechange} />
        <input type="text" name='secretkey' value={user.secretkey} placeholder='Current secretKey' onChange={handlechange} />
        <input type="password" name='password' value={user.password} placeholder='New Password' onChange={handlechange} />
        <button onClick={handleClick}>Update Password</button>
      </div>
    </form>
  )
}

export default PasswordReset