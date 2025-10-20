import { useState } from "react";
import ToDoList from "./ToDoList";
import Header from "./Header";
import Calendar from "./Calendar";

function App() {
  const [route, setRoute] = useState("tasks");

  return (
    <>
      <Header active={route} onNavigate={setRoute} />
      <div className="app">
        {route === "tasks" && <ToDoList />}
        {route === "calendar" && <Calendar />}
        {route === "game" && (
          <div className="to-do-list" style={{ color: "white" }}>
            <h1>Game (coming soon)</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
