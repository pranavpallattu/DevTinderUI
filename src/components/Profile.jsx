import React from "react";
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {

    const user = useSelector((store) => store.user);



  return (
   user && (
     <div className="flex justify-center gap-4">
      <EditProfile user={user}/>
    </div>
   )
  );
};

export default Profile;
