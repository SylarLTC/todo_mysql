import React from "react";
import { resultProps } from "../pages/Home";
import axios from "axios";

interface Props {
  todo: resultProps;
}

export const Todo = ({ todo }: Props) => {
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8800/todos/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <tbody>
      <tr>
        <th>{todo.id}</th>
        <td>{todo.title}</td>
        <td>{todo.description}</td>
        <td>
          <button
            className="text-rose-300 hover:text-rose-400"
            onClick={() => handleDelete(todo.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};
