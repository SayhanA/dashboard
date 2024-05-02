import React from "react";
import Sidebar from "../sidebar/page";

const Profile = () => {
  return (
    <div className="flex gap-5">
      <Sidebar />
      <div className="h-screen flex justify-center items-center text-xl font-bold w-full">Profile</div>
    </div>
  );
};

export default Profile;
