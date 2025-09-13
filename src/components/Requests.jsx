import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";

const Requests = () => {
  const connectionRequests = useSelector((store) => store.requests);
  console.log("store  " + connectionRequests);

  const dispatch = useDispatch();
  const fetchRequests = async () => {
    try {
      const connectionRequests = await axios.get(
        BASE_URL + "/user/requests/received",
        { withCredentials: true }
      );
      console.log(connectionRequests?.data?.data);
      dispatch(addRequests(connectionRequests?.data?.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!connectionRequests) return;
  if (connectionRequests.length == 0)
    return <h1>No Connection Request found</h1>;
  return connectionRequests.map((request) => {
    const { firstName, lastName, age, gender, about, photoUrl } =
      request.fromUserId;

    return (
      <div key={request._id} className="m-10 flex justify-center">
        <div className="hero bg-base-200 border border-gray-300 w-1/2">
          <div className="hero-content flex-col lg:flex-row">
            <img src={photoUrl} className="2-59 h-50 rounded-full shadow-xl" />
            <div>
              <h1 className="text-xl font-bold">
                {firstName + " " + lastName}
              </h1>
              <h2 className="text-lg font-md">
                {age && gender && age + ", " + gender}
              </h2>
              <p className="py-2">{about}</p>
              <button className="btn  bg-orange-600">Reject</button>
              <button className="btn  bg-green-500 mx-4">Accept</button>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Requests;
