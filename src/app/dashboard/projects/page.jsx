"use client";

import { fetchPosts } from "@/app/api/data";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Sidebar from "../sidebar/page";
import { useStore } from "@/store/NewStore";
import { Button, Space } from "antd";
import { RxDotsVertical } from "react-icons/rx";
import Dropdown from "@/components/Dropdown";
import EditProjectModal from "@/components/EditProjectModal";
import Link from "next/link";
import AddProjectModal from "@/components/AddProjectModal";
import { BsPlusCircleDotted } from "react-icons/bs";

const Projects = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  console.log(isDropdown);

  const { data, isLoading, error } = useQuery("posts", fetchPosts);
  // console.log("data:", data);

  // const projectData = [
  //   {
  //     id: 1,
  //     project: "Dashboard",
  //     createdDate: "2024-04-01",
  //     estimatedDate: "2024-06-01",
  //     status: "running",
  //     tasks: [
  //       {
  //         id: 1,
  //         title: "Task 1",
  //         description: "Description of Task 1",
  //         assignedTo: {
  //           name: "John Doe",
  //           image: "john-doe.jpg",
  //         },
  //       },
  //       {
  //         id: 2,
  //         title: "Task 2",
  //         description: "Description of Task 2",
  //         assignedTo: {
  //           name: "Jane Doe",
  //           image: "jane-doe.jpg",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     project: "Pajama",
  //     createdDate: "2024-04-05",
  //     estimatedDate: "2024-07-01",
  //     status: "pending",
  //     tasks: [
  //       {
  //         id: 3,
  //         title: "Task 3",
  //         description: "Description of Task 3",
  //         assignedTo: {
  //           name: "Alice Smith",
  //           image: "alice-smith.jpg",
  //         },
  //       },
  //       {
  //         id: 4,
  //         title: "Task 4",
  //         description: "Description of Task 4",
  //         assignedTo: {
  //           name: "Bob Johnson",
  //           image: "bob-johnson.jpg",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     project: "Mango",
  //     createdDate: "2024-04-10",
  //     estimatedDate: "2024-08-01",
  //     status: "completed",
  //     tasks: [
  //       {
  //         id: 5,
  //         title: "Task 5",
  //         description: "Description of Task 5",
  //         assignedTo: {
  //           name: "Eva Green",
  //           image: "eva-green.jpg",
  //         },
  //       },
  //       {
  //         id: 6,
  //         title: "Task 6",
  //         description: "Description of Task 6",
  //         assignedTo: {
  //           name: "Sam Wilson",
  //           image: "sam-wilson.jpg",
  //         },
  //       },
  //     ],
  //   },
  // ];
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
          status: "pending", // Example status for Task 1
        },
        {
          id: 2,
          title: "Task 2",
          description: "Description of Task 2",
          assignedTo: {
            name: "Jane Doe",
            image: "jane-doe.jpg",
          },
          status: "active", // Example status for Task 2
        },
      ],
    },
    {
      id: 2,
      project: "Pajama",
      createdDate: "2024-04-05",
      estimatedDate: "2024-07-01",
      status: "pending",
      tasks: [
        {
          id: 3,
          title: "Task 3",
          description: "Description of Task 3",
          assignedTo: {
            name: "Alice Smith",
            image: "alice-smith.jpg",
          },
          status: "inprogress", // Example status for Task 3
        },
        {
          id: 4,
          title: "Task 4",
          description: "Description of Task 4",
          assignedTo: {
            name: "Bob Johnson",
            image: "bob-johnson.jpg",
          },
          status: "done", // Example status for Task 4
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
          status: "pending", // Example status for Task 5
        },
        {
          id: 6,
          title: "Task 6",
          description: "Description of Task 6",
          assignedTo: {
            name: "Sam Wilson",
            image: "sam-wilson.jpg",
          },
          status: "active", // Example status for Task 6
        },
      ],
    },
  ];
  

  const [selectedProject, setSelectedProject] = useState(null);
  // const [projects, setProjects] = useState([...projectData]);
  const [projects, setProjects] = useState(() => {
    const storedProjects = localStorage.getItem("projects");
    return storedProjects ? JSON.parse(storedProjects) : [...projectData];
  });

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const handleDeleteProject = (projectId) => {
    const updatedProjects = projects.filter(
      (project) => project.id !== projectId
    );
    setProjects(updatedProjects);
  };

  const handleEditProject = (projectId) => {
    const projectToEdit = projects.find((project) => project.id === projectId);
    setSelectedProject(projectToEdit);
  };

  const handleUpdateProject = (updatedProject) => {
    const updatedProjects = projects.map((project) =>
      project.id === updatedProject.id ? updatedProject : project
    );
    setProjects(updatedProjects);
    setSelectedProject(null);
  };

  const [isDropdow, setIsDropdow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
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
                data.status === "pending" && "border-t-fuchsia-600 border-t-4"
              } ${data.status === "running" && "border-t-blue-500 border-t-4"}`}
            >
              <div className="flex justify-between">
                <p>{data.project}</p>
                <Dropdown>
                  {/* <ul className={`w-[100px] absolute border right-0 rounded-md p-2 ${isDropdown ? "w-[100px]" : "w-0 h-0 p-0 overflow-hidden"}`}> */}
                  <li>
                    <Link
                      className="hover:bg-gray-300 py-1 text-sm text-center w-full block"
                      href={`http://localhost:3000/dashboard/projects/${data.project}`}
                    >
                      View
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => handleEditProject(data.id)}
                      className="hover:bg-gray-300 py-1 text-sm text-center w-full"
                    >
                      Edit
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleDeleteProject(data.id)}
                      className="hover:bg-gray-300 py-1 text-sm text-center w-full"
                    >
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
      <button onClick={() => setShowModal(true)} className="w-[300px] border h-[150px] rounded-xl p-5 shadow-xl mt-5 flex justify-center items-center"><BsPlusCircleDotted className="text-[50px] text-blue-300 font-light" /></button>
      </div>
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {showModal && (
          <AddProjectModal
            onAddProject={handleAddProject}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
      {selectedProject && (
        <EditProjectModal
          project={selectedProject}
          onUpdateProject={handleUpdateProject}
        />
      )}
    </div>
  );
};

export default Projects;
