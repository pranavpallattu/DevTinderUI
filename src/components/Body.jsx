import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user=useSelector((store)=>store.user)

  const fetchUser = async () => {
    if(user) return
    // if (!user) return;

    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      console.log(res);
      dispatch(addUser(res.data));
      console.log("profile/view from body run");
    } catch (err) {
      if (err?.response?.status == 401) {
        navigate("/login");
      }
      console.error(err);
      // error page
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <NavBar />
      {/* any children routes of body will render over here */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
