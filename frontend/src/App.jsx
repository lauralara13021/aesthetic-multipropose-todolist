import { useState, useEffect } from "react";
import "./App.css"; 
import "./index.css"
function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [courses, setCourses] = useState([]);
  const [course_name, setCourseName] = useState("");

  // Llamar datos del backend
  useEffect(() => {
    fetch("http://127.0.0.1:8000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));

    fetch("http://127.0.0.1:8000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
     
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

  const newCourse = async () => {
    const newCourseObj = {id: courses.length + 1, course_name};
    await fetch("http://127.0.0.1:8000/courses", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newCourseObj),
    });

    setCourses([...courses, newCourseObj]);
    setCourseName("");
  };

  const toggleTaskCompletion = async (id) => {
  const updatedTasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  setTasks(updatedTasks);

  
};


  return (

<div className = "main-container"> 


<div className="contenedor">

  <img className="sticker" src="images/star-sticker.png" alt="Sticker" />
  {/*<h1>🌼 Vale's To Do's 🌼</h1>*/}
  <h1 className="text-4xl font-extrabold text-green-600 drop-shadow-lg text-center tracking-wide">
  🌼 VALE'S TO DO's 🌼
</h1>


</div>



{/* container con los todos y el contaimer donde pondré el gatito y la frase motivacional jdjs*/}
  <div className = "second-container">

{/* container de proyecto*/}
    <div className="app-container">
      <div><h2> 🌷 Proyectos 🌷</h2> 
</div>     
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
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              className="w-5 h-5 accent-pink-500 rounded cursor-pointer"
            />

            <span style = {{textDecoration: task.completed ? "line-through" : "none"}}>
            {task.id} - {task.title}
            </span>
          </li>
        ))}
      </ul>
      <div>
        <h2>💗❤️‍🔥 I love u 💗❤️‍🔥</h2>
        <button className="boton-iloveu"> ❤️‍🔥 I love u ❤️‍🔥 </button>
        </div>    
    </div>

{/* container de cursos*/}
     <div className="app-container">
      <div><h2> 🌷 Courses 🌷</h2></div>     
      <div className="input-area">        
        <input
          placeholder="Escribe tu tarea..."
          value={course_name}
          onChange={(e) => setCourseName(e.target.value)}
          className="input-task"
        />
        <button onClick={newCourse} className="boton-pixel">
          Add Course +
        </button>
      </div>
      <ul className="task-list">
        {courses.map((course) => (
          <li key={course.id} className="task-item">
            {course.id} - {course.course_name}
          </li>
        ))}
      </ul>
      <div>
        <h2>💗❤️‍🔥 I love u 💗❤️‍🔥</h2>
        <button className="boton-iloveu"> ❤️‍🔥 I love u ❤️‍🔥 </button>
        </div>    
    </div>

    {/* container de imagen y frase del día*/}
    <div className="third-container">

       {/* imagen del día*/}
      <div className="phrase-image-container"> 

        <h2>🌼 Imagen del Día 🌼</h2>
        <img className= "imageoftheday"src="images/pixel_background.png" alt="Imagen del Día" />

      </div>

       {/* frase del día*/}
       <div className="phrase-image-container">
        <h2>🌼 Frase del Día 🌼</h2>
        <p> "Pao! "</p>
       </div>


    </div>






    </div>
    </div>
  );
}

export default App;
