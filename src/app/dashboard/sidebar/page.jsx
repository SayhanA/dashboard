'use client'

import { useStore } from "@/store/NewStore";
import { Button } from "antd";
import Link from "next/link";
import React from "react";
const Sidebar = ({ className = "" }) => {

  const { logout } = useStore(
    (state) => state.user
  );

  const mentItems = [
    {
        id: 2324,
        title: "Projects",
        link: 'http://localhost:3000/dashboard/projects'
    },
    {
        id: 5234,
        title: "Profile",
        link: 'http://localhost:3000/dashboard/profile'
    }
  ]


  return (
    <div className={`h-screen w-[240px] rounded-xl shadow-xl ${className} relative`}>
      <p className="text-md font-bold text-center py-5 bg-blue-500 text-white">Dashboard</p>

      {/* Sidebar Menu */}
      <ul className="mt-5">
        {
            mentItems?.map((data) => <Link href={data?.link} className="block w-full text-center py-4 hover:bg-black hover:text-white transition-all">
                {data?.title}
            </Link>)
        }
      </ul>

      <button onClick={logout} className="w-full py-5 border rounded-br-xl hover:bg-gray-600 transition-all shadow-xl font-bold bg-gray-500 text-white absolute bottom-0">LogOut</button>
    </div>
  );
};

export default Sidebar;
