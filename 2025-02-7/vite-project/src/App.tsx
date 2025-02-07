import React, { useState } from "react";
import { Task } from "./interfaces/Task";
import TaskForm from "./components/TaskForm";
import TaskTable from "./components/TaskTable";
import "./styles.css";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddTask = () => {
    setEditingTask(null);
    setShowForm(true);
  };

  const handleSaveTask = (task: Task) => {
    setTasks((prevTasks) =>
      prevTasks.some((t) => t.id === task.id)
        ? prevTasks.map((t) => (t.id === task.id ? task : t))
        : [...prevTasks, task]
    );
    setShowForm(false);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleDeleteTask = (id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <button onClick={handleAddTask} className="add-task-btn">
        + Add Task
      </button>
      <TaskTable tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
      {showForm && (
        <div className="overlay">
          <div className="popup">
            <TaskForm
              onSave={handleSaveTask}
              onCancel={() => setShowForm(false)}
              initialTask={editingTask || undefined}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
