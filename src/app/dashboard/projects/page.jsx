"use client";

import { fetchPosts } from "@/app/api/data";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Sidebar from "../sidebar/page";
import { useStore } from "@/store/NewStore";
import { Button, Space } from "antd";
import { RxDotsVertical } from "react-icons/rx";
import Dropdown from "@/components/Dropdown";

const Projects = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  console.log(isDropdown);

  const { data, isLoading, error } = useQuery("posts", fetchPosts);
  // console.log("data:", data);

  const projectData = [
    {
      id: 1,
      project: "Dashboard",
      createdDate: "2024-04-01",
      estimatedDate: "2024-06-01",
      status: "running",
      tasks: [
        {
          id: 1,
          title: "Task 1",
          description: "Description of Task 1",
          assignedTo: {
            name: "John Doe",
            image: "john-doe.jpg",
          },
        },
        {
          id: 2,
          title: "Task 2",
          description: "Description of Task 2",
          assignedTo: {
            name: "Jane Doe",
            image: "jane-doe.jpg",
          },
        },
      ],
    },
    {
      id: 2,
      project: "Pajama",
      createdDate: "2024-04-05",
      estimatedDate: "2024-07-01",
      status: "panding",
      tasks: [
        {
          id: 3,
          title: "Task 3",
          description: "Description of Task 3",
          assignedTo: {
            name: "Alice Smith",
            image: "alice-smith.jpg",
          },
        },
        {
          id: 4,
          title: "Task 4",
          description: "Description of Task 4",
          assignedTo: {
            name: "Bob Johnson",
            image: "bob-johnson.jpg",
          },
        },
      ],
    },
    {
      id: 3,
      project: "Mango",
      createdDate: "2024-04-10",
      estimatedDate: "2024-08-01",
      status: "completed",
      tasks: [
        {
          id: 5,
          title: "Task 5",
          description: "Description of Task 5",
          assignedTo: {
            name: "Eva Green",
            image: "eva-green.jpg",
          },
        },
        {
          id: 6,
          title: "Task 6",
          description: "Description of Task 6",
          assignedTo: {
            name: "Sam Wilson",
            image: "sam-wilson.jpg",
          },
        },
      ],
    },
  ];

  const [projects, setProjects] = useState([...projectData]); // Your initial projects array

  const handleDeleteProject = (projectId) => {
    const updatedProjects = projects.filter(
      (project) => project.id !== projectId
    );
    setProjects(updatedProjects);
  };

  return (
    <div className="relative flex">
      <Sidebar className="border" />
      <div className="p-5">
        <ul className="flex gap-5">
          {projects.map((data) => (
            <li
              key={data.id}
              className={`w-[300px] border h-[150px] rounded-xl p-5 shadow-xl ${
                data.status === "completed" && "border-t-green-600 border-t-4"
              } ${
                data.status === "panding" && "border-t-fuchsia-600 border-t-4"
              } ${data.status === "running" && "border-t-blue-500 border-t-4"}`}
            >
              <div className="flex justify-between">
                <p>{data.project}</p>
                <Dropdown>
                  {/* <ul className={`w-[100px] absolute border right-0 rounded-md p-2 ${isDropdown ? "w-[100px]" : "w-0 h-0 p-0 overflow-hidden"}`}> */}
                  <li className="hover:bg-gray-300 py-1 text-sm text-center">
                    View
                  </li>
                  <li className="hover:bg-gray-300 py-1 text-sm text-center">
                    Edit
                  </li>
                  <li className="hover:bg-gray-300 py-1 text-sm text-center">
                    <button onClick={() => handleDeleteProject(data.id)}>
                      Delete
                    </button>
                  </li>
                  {/* </ul> */}
                </Dropdown>
              </div>
              <div>
                <p>Created:{data.createdDate}</p>
                <p>Expired:{data.estimatedDate}</p>
              </div>
              <button onClick={() => handleDeleteProject(data.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
