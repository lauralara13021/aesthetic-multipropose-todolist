import { useState } from "react";
import Todo from "./pages/Todo";
import Journal from "./pages/Journal";

function App() {
  const [currentPage, setCurrentPage] = useState("menu");


  return (
    <div>
      {currentPage === "menu" && (
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold text-pink-500">Menú</h1>


          <button
            onClick={() => setCurrentPage("todo")}
            className="px-4 py-2 bg-pink-500 text-white rounded-lg"
          >
            Ir a To-Do ✅
          </button>

          <button
            onClick={() => setCurrentPage("journal")}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Ir a Journal 📓
          </button>

          <button className="kawaii-btn kawaii-glass">
  Glass ✨
</button>

<button class="btn-kawaii btn-pink animate-heartbeat hover-float">
  🌸 Love Button 🌸
</button>


<button className="kawaii-btn kawaii-sparkle kawaii-rebound">
  Sparkles ⭐
</button>

<button className="kawaii-btn kawaii-rainbow kawaii-rebound">
  Rainbow 🌈
</button>

        </div>
      )}

      {currentPage === "todo" && <Todo />}
      {currentPage === "journal" && <Journal />}
    </div>
  );
}

export default App;
