import React from 'react'

const UserCard = ({user}) => {
    const {firstName, lastName, photoUrl, gender, age, about} = user
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
         <button className="btn bg-red-400">Ignored</button>
      <button className="btn bg-pink-500">Interested</button>
     </div>
    </div>
  </div>
</div>  )
}

export default UserCard