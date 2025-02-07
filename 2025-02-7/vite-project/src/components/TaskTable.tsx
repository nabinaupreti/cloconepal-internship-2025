import React, { useState } from "react";
import { Task } from "../interfaces/Task";

interface TaskTableProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskTable: React.FC<TaskTableProps> = ({ tasks, onEdit, onDelete }) => {
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const confirmDelete = (id: number) => {
    setDeleteId(id);
  };

  const handleDelete = () => {
    if (deleteId !== null) {
      onDelete(deleteId);
      setDeleteId(null);
    }
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
  };

  return (
    <div>
      <table className="task-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>
                <button onClick={() => handleEdit(task)} className="edit-btn">Edit</button>
                <button onClick={() => confirmDelete(task.id)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {deleteId !== null && (
        <div className="confirm-popup">
          <div className="popup-content">
            <p>Are you sure you want to delete this task?</p>
            <div className="popup-btns">
              <button className="confirm" onClick={handleDelete}>Yes</button>
              <button className="cancel" onClick={() => setDeleteId(null)}>No</button>
            </div>
          </div>
        </div>
      )}

      {editingTask !== null && (
        <div className="edit-popup">
          <div className="popup-content">
            <h2>Edit Task</h2>
            <form onSubmit={(e) => { e.preventDefault(); onEdit(editingTask); setEditingTask(null); }}>
              <label>Title</label>
              <input type="text" value={editingTask.title} onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })} />
              
              <label>Description</label>
              <input type="text" value={editingTask.description} onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })} />
              
              <label>Due Date</label>
              <input type="date" value={editingTask.dueDate} onChange={(e) => setEditingTask({ ...editingTask, dueDate: e.target.value })} />
              
              <label>Priority</label>
              <select value={editingTask.priority} onChange={(e) => setEditingTask({ ...editingTask, priority: e.target.value as "Low" | "Medium" | "High" })}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              
              <div className="popup-btns">
                <button type="submit" className="save-btn">Save</button>
                <button className="cancel-btn" onClick={() => setEditingTask(null)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskTable;
