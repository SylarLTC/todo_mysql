import { Todo } from "./Todo";
import { resultProps } from "../pages/Home";

interface todosProps {
  todos: resultProps[];
}

export const Todos = ({ todos }: todosProps) => {
  return (
    <div className="todos__container">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="w-1/100"></th>
              <th className="w-40/100">Title</th>
              <th className="w-59/100">Description</th>
            </tr>
          </thead>

          {/* row 1 */}
          {todos.map((todo, key) => (
            <Todo key={key} todo={todo} />
          ))}
        </table>
      </div>
    </div>
  );
};
