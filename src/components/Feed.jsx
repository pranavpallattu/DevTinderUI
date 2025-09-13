import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './UserCard'

const Feed = () => {
  const dispatch=useDispatch()

  const feed=useSelector((store)=>store.feed)
  console.log(feed);
  

  const fetchFeed=async()=>{
    try{
      const res=await axios.get(BASE_URL+"/user/feed",{withCredentials:true})
      dispatch(addFeed(res.data?.data))
    }
    catch(error){
      console.error(error)
    }
  }

  useEffect(()=>{
    fetchFeed()
  },[])
  
  return (
    <div className='flex justify-center mt-25'>
    {
      feed && <UserCard user={feed[0]}/>
      
      // feed &&  <UserCard user={feed[0]}/>
      
      
  }
    </div>
  )
}

export default Feed