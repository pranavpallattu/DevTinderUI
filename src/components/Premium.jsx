import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";

const Premium = () => {

  const handleBuyClick=async(memberShipType)=>{
    try{
      const order=await axios.post(BASE_URL+"/payment/create",{
        memberShipType
      },{
        withCredentials:true
      })
      console.log(order);
      const key_id=order?.data?.key_id

      const {amount, currency, notes, orderId} = order?.data?.data
      

         const options = {
        key: key_id, // Replace with your Razorpay key_id
        amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency,
        name: 'DevTinder',
        description: 'Connect To Other Developers',
        order_id:orderId, // This is the order_id created in the backend
        // callback_url: 'http://localhost:3000/payment-success', // Your success URL
        prefill: {
          name: notes.firstName+ " "+ notes.lastName,
          email: notes.emailId,
          contact: '9999999999'
        },
        theme: {
          color: '#F37254'
        },
      };
      
       const rzp = new window.Razorpay(options);
      rzp.open();
      
    }
    catch(error){
      console.error(error);
      
    }
  }
  return (
    <div className="p-5">
      <div className="flex w-full">
        <div className="card bg-base-300 rounded-box grid h-60 grow place-items-center p-5">
          <h1 className="text-xl font-semibold">Silver Membership</h1>
          <ul>
            <li>- Chat With Other People</li>
            <li>- 100 Connection Requests Per Day</li>
            <li>- Blue Tick</li>
            <li>- Valid For One Month</li>
          </ul>
          <button onClick={()=>handleBuyClick("silver")} className="btn bg-gray-200 p-3 text-gray-600 font-medium ">
           Buy Silver
          </button>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="card bg-base-300 rounded-box grid h-60 grow place-items-center p-5">
          <h1 className="text-xl font-semibold">Gold Membership</h1>
          <ul>
            <li>- Chat With Other People</li>
            <li>- 200 Connection Requests Per Day</li>
            <li>- Blue Tick</li>
            <li>- Valid For Three Months</li>
          </ul>
          <button onClick={()=>handleBuyClick("gold")} className="btn bg-yellow-400 p-3 font-medium ">
            Buy Gold
          </button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
