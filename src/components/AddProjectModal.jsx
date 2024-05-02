import { useState } from 'react';

const AddProjectModal = ({ onAddProject, onClose }) => {
  const [formData, setFormData] = useState({
    project: '',
    createdDate: '',
    estimatedDate: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate an id for the new project
    const id = Math.max(...projects.map((project) => project.id)) + 1;
    const newProject = { ...formData, id };
    onAddProject(newProject);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add New Project</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Project:
            <input type="text" name="project" value={formData.project} onChange={handleChange} />
          </label>
          <label>
            Created Date:
            <input type="text" name="createdDate" value={formData.createdDate} onChange={handleChange} />
          </label>
          <label>
            Estimated Date:
            <input type="text" name="estimatedDate" value={formData.estimatedDate} onChange={handleChange} />
          </label>
          <label>
            Status:
            <input type="text" name="status" value={formData.status} onChange={handleChange} />
          </label>
          <button type="submit">Add Project</button>
        </form>
      </div>
    </div>
  );
};

export default AddProjectModal;
