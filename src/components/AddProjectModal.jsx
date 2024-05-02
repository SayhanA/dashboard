

import { useEffect, useState } from "react";

const AddProjectModal = ({ onAddProject, onClose }) => {

  const [newProjects, setNewProjects] = useState(() => {
    const storedProjects = localStorage.getItem("projects");
    return storedProjects ? JSON.parse(storedProjects) : [...projectData];
  });

  const [newData, setNewData] = useState([]);

  const [formData, setFormData] = useState({
    project: "",
    createdDate: "",
    estimatedDate: "",
    status: "",
  });

  function generateRandomId(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = "";
    for (let i = 0; i < length; i++) {
      randomId += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return randomId;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const data = localStorage.getItem("projects");
    console.log(data)

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomId = generateRandomId(4);
    const newProject = { ...formData, id: randomId };
    console.log(newProject);
    // Update projects state with the new project
    setNewData([...data, newProject]);
    console.log("new Data:", newData)
    // onClose();
  };

  return (
    <div className="modal border p-10 z-20 bg-white rounded-xl shadow-2xl">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 className="w-full text-center mb-3">Add New Project</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label>
            Project:
            <input
              type="text"
              name="project"
              value={formData.project}
              onChange={handleChange}
            />
          </label>
          <label>
            Created Date:
            <input
              type="date"
              name="createdDate"
              value={formData.createdDate}
              onChange={handleChange}
            />
          </label>
          <label>
            Estimated Date:
            <input
              type="date"
              name="estimatedDate"
              value={formData.estimatedDate}
              onChange={handleChange}
            />
          </label>
          <label>
            Status:
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="completed">Completed</option>
              <option value="published">Published</option>
              <option value="ongoing">Ongoing</option>
            </select>
          </label>
          <button type="submit">Add Project</button>
        </form>
      </div>
    </div>
  );
};

export default AddProjectModal;
