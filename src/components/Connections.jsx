import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
    const dispatch=useDispatch()
    const connections=useSelector((store)=>store.connections)
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res?.data?.data))
      console.log(res?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchConnections();
  }, []);

  if(!connections) return;
  if(connections.length==0) return <h1>No Connections found</h1>
  return (
    
    connections.map((connection)=>{
        const{firstName, lastName, age, gender, about, photoUrl}=connection
        return(
                <div className="m-10">
      <div className="hero bg-base-200 border border-gray-300">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={photoUrl}
            className="2-59 h-50 rounded-full shadow-xl"
          />
          <div>
            <h1 className="text-xl font-bold">{firstName + " " + lastName}</h1>
            <h2 className="text-lg font-md">{age && gender && age + ", " + gender}</h2>
            <p className="py-2">
             {about}
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
        )
    })

  );
};

export default Connections;
