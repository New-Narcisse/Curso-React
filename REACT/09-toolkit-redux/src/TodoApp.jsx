import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {
const [todoId, setTodoId] = useState(1)

  
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  }

  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId( todoId - 1 )
  }



  return (
    <>
      <h1> Todos - RTK Query </h1>
      <hr />
      <h4> isLoading: {isLoading ? "True" : "False"} </h4>

      <pre> {JSON.stringify(todo)} </pre>

      <button onClick={nextTodo} >Next todo</button>
      <button onClick={prevTodo} >Prev todo</button>
      {/* <ul>
        {todos.map((data) => (
          <li key={data.id}>
            <strong> {data.completed ? "DONE" : "PENDING"} </strong>
            {data.title}
          </li>
        ))}
      </ul> */}
    </>
  );
};
