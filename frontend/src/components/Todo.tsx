import React from "react";
import { resultProps } from "../pages/Home";

interface Props {
  todo: resultProps;
}

export const Todo = ({ todo }: Props) => {
  return (
    <tbody>
      <tr>
        <th>{todo.id}</th>
        <td>{todo.title}</td>
        <td>{todo.description}</td>
      </tr>
    </tbody>
  );
};
