import { useState, useEffect } from "react";
import "./App.css"; // 👈 importante, enlaza tus estilos

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // Llamar datos del backend
  useEffect(() => {
    fetch("http://127.0.0.1:8000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  // Crear una nueva tarea
  const newTask = async () => {
    const newTaskObj = { id: tasks.length + 1, title, completed: false };
    await fetch("http://127.0.0.1:8000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTaskObj),
    });

    setTasks([...tasks, newTaskObj]);
    setTitle("");
  };

  return (
    <div className="app-container">
      <h1>🌼 Vale's To Do's 🌼</h1>

      <div className="input-area">
        <input
          placeholder="Escribe tu tarea..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-task"
        />
        <button onClick={newTask} className="boton-pixel">
          Add Task +
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            {task.id} - {task.title}
          </li>
        ))}
      </ul>

      <div>
        <h2 className="iloveu">💗❤️‍🔥 I love u 💗❤️‍🔥</h2>
        <button className="boton-iloveu"> ❤️‍🔥 I love u ❤️‍🔥 </button>
        </div>
      
    </div>
  );
}

export default App;
