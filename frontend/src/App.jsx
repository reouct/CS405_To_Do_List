import ToDoList from "./ToDoList";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <ToDoList />
      </div>
    </>
  );
}

export default App;
