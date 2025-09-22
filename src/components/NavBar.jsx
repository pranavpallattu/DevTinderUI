import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'
import { removeUser } from '../utils/userSlice'

const NavBar = () => {

  const user=useSelector((store)=>store.user)
  console.log(user);

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleLogout=async()=>{
    try{
      const res=await axios.post(BASE_URL+"/logout",{withCredentials:true})
      console.log(res);
      
      dispatch(removeUser())
      navigate("/login")
    }
    catch(err){
      console.error(err)
    }
  }


  return (
    <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
  </div>
  <div className="flex gap-2">
    {user && <div className="dropdown dropdown-end mx-5">
    <div className='flex items-center'>
        <p>Welcome {user.firstName}</p>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ms-2">
        <div className="w-10 rounded-full">
          <img
            alt="User Photo"
            src={user.photoUrl} />
        </div>
      </div>
    </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
          </Link>
        </li>
         <li>
          <Link to="/connections" className="justify-between">
            Connections
          </Link>
        </li>
         <li>
          <Link to="/requests" className="justify-between">
            Connection Requests
          </Link>
        </li>
          <li>
          <Link to="/premium" className="justify-between">
            Premium
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li onClick={handleLogout}><a>Logout</a></li>
      </ul>
    </div>}
  </div>
</div>
     )
}

export default NavBar