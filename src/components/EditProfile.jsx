import React, { useState } from "react";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [about, setAbout] = useState(user?.about);
  const [skills, setSkills] = useState(user?.skills);

  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSave = async () => {
    setError("")
    try {
      const res = await axios.put(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          about,
          photoUrl,
          skills,
        },
        { withCredentials: true }
      );
      console.log(res);
      dispatch(addUser(res?.data?.data));
      <div className="toast toast-top toast-center">
  <div className="alert alert-info">
    <span>Profile updated Successfully</span>
  </div>

</div>
    } catch (error) {
      console.error(error);
      setError(error?.message);
    }
  };

  return (
    <>
      <div className="flex justify-center my-32">
        <div className="card bg-base-300 text-neutral-content w-96">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">Edit Profile</h2>
            <div className="w-full py-3">
              <fieldset className="flex flex-col gap-2 p-2">
                <legend className="text-left text-md mb-2">
                  First Name :{" "}
                </legend>
                <input
                  type="text"
                  className="input w-full p-2 text-base"
                  placeholder="Type here"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </fieldset>

              <fieldset className="flex flex-col gap-2 p-2">
                <legend className="text-left text-md mb-2">Last Name : </legend>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  className="input w-full p-2 text-base"
                  placeholder="Type here"
                />
              </fieldset>

              <fieldset className="flex flex-col gap-2 p-2">
                <legend className="text-left text-md mb-2">Age : </legend>
                <input
                  type="text"
                  className="input w-full p-2 text-base"
                  placeholder="Type here"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </fieldset>

              <fieldset className="flex flex-col gap-2 p-2">
                <legend className="text-left text-md mb-2">Gender: </legend>
                <input
                  type="text"
                  className="input w-full p-2 text-base"
                  placeholder="Type here"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </fieldset>

              <fieldset className="flex flex-col gap-2 p-2">
                <legend className="text-left text-md mb-2">Photo Url : </legend>
                <input
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  type="text"
                  className="input w-full p-2 text-base"
                  placeholder="Type here"
                />
              </fieldset>
              <fieldset className="flex flex-col gap-2 p-2">
                <legend className="text-left text-md mb-2">About : </legend>
                <input
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  type="text"
                  className="input w-full p-2 text-base"
                  placeholder="Type here"
                />
              </fieldset>

              <fieldset className="flex flex-col gap-2 p-2">
                <legend className="text-left text-md mb-2">Skills : </legend>
                <input
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  type="text"
                  className="input w-full p-2 text-base"
                  placeholder="Type here"
                />
              </fieldset>
            </div>
            <p className="text-red-300">{error}</p>
            <div className="card-actions justify-end">
              <button onClick={handleSave} className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserCard
        user={{ firstName, lastName, age, gender, about, photoUrl, skills }}
      />
    </>
  );
};

export default EditProfile;
