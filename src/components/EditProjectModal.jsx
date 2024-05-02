import React, { useState } from "react";

const EditProjectModal = ({ project, onUpdateProject }) => {
  const [editedProject, setEditedProject] = useState({
    id: project.id,
    project: project.project,
    createdDate: project.createdDate,
    estimatedDate: project.estimatedDate,
    status: project.status,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Add any validation logic here if needed
    onUpdateProject(editedProject);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Edit Project</h2>
        <div className="mb-4">
          <label htmlFor="projectName" className="block mb-1">
            Project Name:
          </label>
          <input
            type="text"
            id="projectName"
            name="project"
            value={editedProject.project}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="createdDate" className="block mb-1">
            Created Date:
          </label>
          <input
            type="text"
            id="createdDate"
            name="createdDate"
            value={editedProject.createdDate}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="estimatedDate" className="block mb-1">
            Estimated Date:
          </label>
          <input
            type="text"
            id="estimatedDate"
            name="estimatedDate"
            value={editedProject.estimatedDate}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block mb-1">
            Status:
          </label>
          <select
            id="status"
            name="status"
            value={editedProject.status}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3"
          >
            <option value="running">Running</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div className="text-right">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProjectModal;
