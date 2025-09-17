import React from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { removeUserFromFeed } from '../utils/feedSlice'

const UserCard = ({user}) => {

  const dispatch=useDispatch()

    if(!user) return;

    const {_id, firstName, lastName, photoUrl, gender, age, about} = user


  const handleSendRequest=async(status,userId)=>{
    try{
      const res=await axios.post(BASE_URL+"/request/send/"+status+"/"+userId,{},{withCredentials:true})
      console.log(res);
      dispatch(removeUserFromFeed(userId))
      
    }
    catch(error){
      console.error(error)
    }
  }



  return (
<div className="card bg-base-100 w-96 shadow-sm my-32">
  <figure>
    <img 
    className='w-100 h-70'
    src={photoUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+ " " +lastName}</h2>
    <p>Age: {age} Gender: {gender}</p>
    <p>{about}</p>
    <div className="card-actions justify-end">
     <div className='flex justify-between w-full p-6'>
         <button className="btn bg-red-400" onClick={()=>handleSendRequest("ignored",_id)}>Ignored</button>
      <button className="btn bg-pink-500" onClick={()=>handleSendRequest("interested",_id)}>Interested</button>
     </div>
    </div>
  </div>
</div>  )
}

export default UserCard