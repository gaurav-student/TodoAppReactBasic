import Todoform from "./Todoform";

const Todo = function () {
  return (
    <div className="outer_container">
      <div className="container">
        <h1 className="header">Todo List</h1>
        <Todoform />
      </div>
    </div>
  );
};
export default Todo;
