import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [isLoginForm,setIsLoginForm]=useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      console.log(res);
      if (res?.status === 200) {
        dispatch(addUser(res.data));
        navigate("/");
      }
    } catch (error) {
      setError(error?.response?.data || "something went wrong");
    }
  };

  const handleSignUp=async()=>{
    try{
      const result=await axios.post(BASE_URL+"/signup",{
        firstName,
        lastName,
        emailId,
        password
      },
    {withCredentials:true})
    dispatch(addUser(result?.data?.data))
    navigate("/profile")
    }
    
    catch(error){
      console.error(error);
      
    }
  }

  return (
    <div className="flex justify-center my-32">
      <div className="card bg-base-300 text-neutral-content w-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">{isLoginForm ? "Login" : "Signup"}</h2>
          <div className="w-full py-3">
        { !isLoginForm &&  
        <div>
           <fieldset className="fieldset py-4">
              <input
                type="text"
                className="input py-3"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset py-4">
              <input
                type="text"
                className="input py-3"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </fieldset>
        </div>
        }
            <fieldset className="fieldset py-4">
              <input
                type="text"
                className="input py-3"
                placeholder="Email Id"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset py-4">
              <input
                type="text"
                className="input py-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <p className="text-red-300">{error}</p>
          <p className="cursor-pointer p-2" onClick={()=>setIsLoginForm(!isLoginForm)}>{isLoginForm ? "New User? Signup here" : "Already a User? Login here"}</p>
          <div className="card-actions justify-end">
            <button onClick={isLoginForm? handleLogin : handleSignUp} className="btn btn-primary">
             {isLoginForm ? "Login" : "Signup"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
