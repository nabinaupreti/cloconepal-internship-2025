import React from "react";
import { Task } from "../interfaces/Task";

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete }) => {
  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <li key={task.id} className="task-item">
            <div>
              <strong>{task.title}</strong>
              <p>{task.description}</p>
            </div>
            <div className="task-buttons">
              <button onClick={() => onEdit(task)} className="edit-btn">
                Edit
              </button>
              <button onClick={() => onDelete(task.id)} className="delete-btn">
                Delete
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default TaskList;
