import React, { useState } from "react";
import { Task } from "../interfaces/Task";

interface TaskFormProps {
  onSave: (task: Task) => void;
  onCancel: () => void;
  initialTask?: Task;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSave, onCancel, initialTask }) => {
  const [task, setTask] = useState<Task>(
    initialTask || { id: Date.now(), title: "", description: "", dueDate: "", priority: "Medium" }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(task);
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>{initialTask ? "Edit Task" : "Add Task"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input type="text" name="title" value={task.title} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input type="text" name="description" value={task.description} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Due Date:</label>
            <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Priority:</label>
            <select name="priority" value={task.priority} onChange={handleChange}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="save-btn">Save</button>
            <button type="button" onClick={onCancel} className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
