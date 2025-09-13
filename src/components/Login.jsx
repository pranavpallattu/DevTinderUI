import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'

const Login = () => {

  const[emailId,setEmailId]=useState("pranav@gmail.com")
  const[password,setPassword]=useState("Pranav@123")
  const[error,setError]=useState("")

  const dispatch=useDispatch()
    const navigate=useNavigate()

  const handleLogin= async()=>{
    try{
       const res=await axios.post( BASE_URL + "/login" ,{
          emailId,
          password
        },{withCredentials:true})
        console.log(res);
        if(res?.status===200){
         dispatch(addUser(res.data))
        navigate("/")
        }
     
    }
    catch(error){
      setError(error?.response?.data || "something went wrong")      
    }
  }



  return (
    <div className='flex justify-center my-32'>
      <div className="card bg-base-300 text-neutral-content w-96">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl">Login</h2>
    <div className='w-full py-3'>
      <fieldset className="fieldset py-4">
  <input type="text" className="input py-3" placeholder="Email Id" value={emailId} onChange={(e)=>setEmailId(e.target.value)} />
</fieldset>
   <fieldset className="fieldset py-4">
  <input type="text" className="input py-3" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
</fieldset>
    </div>
    <p className='text-red-300' >{error}</p>
    <div className="card-actions justify-end">
      <button onClick={handleLogin} className="btn btn-primary">Login</button>
    </div>
  </div>
</div> 
    </div>
  )
}

export default Login