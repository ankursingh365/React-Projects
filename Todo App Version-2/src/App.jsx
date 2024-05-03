import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {

  const todoItems = [
  {
    name: 'BUY MILK',
    dueDate: '03/05/2024',
  },

  {
    name: 'GO TO COLLEGE',
    dueDate: '03/05/2024',
  },

  {
    name: 'Like The Project',
    dueDate: '03/05/2024',
  },
];

  return (
    <center className='todo-container'>
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
