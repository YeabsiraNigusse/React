import { useState } from "react";



export default function ArrayState(){
    const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };
   const list = todos.map((todo, index) => (
    <li key={index}>{todo.text}</li>
  ))
  return (
    <>
    <ul>
        {list}
      </ul>
      <button onClick={() => addTodo('New Todo')}>Add Todo</button>
    </>
  )
      
}