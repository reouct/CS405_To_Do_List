import { useState } from "react";
import ToDoList from "./ToDoList";
import Header from "./Header";
import Calendar from "./Calendar";
import Game from "./Game";

function App() {
  const [route, setRoute] = useState("tasks");

  return (
    <>
      <Header active={route} onNavigate={setRoute} />
      <div className="app">
        {route === "tasks" && <ToDoList />}
        {route === "calendar" && <Calendar />}
        {route === "game" && <Game />}
      </div>
    </>
  );
}

export default App;
