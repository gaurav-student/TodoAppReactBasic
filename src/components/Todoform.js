import { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
const Todoform = function () {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const addedtodo = useCallback(
    (e) => {
      e.preventDefault();
      setTodo([...todo, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    },
    [input]
  );
  const deletetodo = function ({ id }) {
    console.log(todo.filter((todo) => todo.id !== id));
    setTodo(todo.filter((todo) => todo.id !== id));
  };
  const completetodo = function ({ id }) {
    setTodo(todo.filter((todo) => todo.id !== id));
    // setTodo(todo.filter((todo) => todo.id !== id));
  };
  return (
    <form>
      <input
        className="input"
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="ok_button" type="submit" onClick={addedtodo}>
        OK
      </button>
      {todo &&
        todo.map((ar) => (
          <div>
            {ar.title}
            <button onClick={() => completetodo(ar)}>C</button>
            <button>E</button>
            <button onClick={() => deletetodo(ar)}>D</button>
          </div>
        ))}
    </form>
  );
};
export default Todoform;
