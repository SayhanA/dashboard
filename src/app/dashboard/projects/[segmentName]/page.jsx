"use client";

import Dropdown from "@/components/Dropdown";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const DyamicPage = () => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const urlParts = window.location.href.split("/");
    const projectName = urlParts[urlParts.length - 1];

    // Retrieve projects from local storage
    const storedProjects = JSON.parse(localStorage.getItem("projects"));

    const foundProject = storedProjects.find(
      (project) => project.project === projectName
    );

    setProject(foundProject);
  }, []);

  if (!project) {
    return <div>Loading...</div>;
  }

  console.log(project.tasks)

  return (
    <div>
      <h1>{project.project}</h1>
      <p>Created Date: {project.createdDate}</p>
      <p>Estimated Date: {project.estimatedDate}</p>
      <p>Status: {project.status}</p>
      <h2>Tasks:</h2>
      <ul className="flex gap-5">
        {project?.tasks?.map((data) => (
          <li
            key={data.id}
            className={`w-[300px] border rounded-xl p-5 shadow-xl ${
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
            <p>{data.description}</p>
             <p>Assigned To: {data.assignedTo.name}</p>
             <p>Status: {data.status}</p> {/* Render task status */}
            <div>
              <p>Created:{data.createdDate}</p>
              <p>Expired:{data.estimatedDate}</p>
            </div>
            <button onClick={() => handleDeleteProject(data.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DyamicPage;
// {/* <ul>
//         {project.tasks.map(task => (
//           <li key={task.id}>
//             <h3>{task.title}</h3>
//             <p>{task.description}</p>
//             <p>Assigned To: {task.assignedTo.name}</p>
//             <p>Status: {task.status}</p> {/* Render task status */}
//           </li>
//         ))}
//       </ul> */}
