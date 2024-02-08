import React, { useEffect, useState } from "react";
import { Todos } from "../components/Todos";
import axios from "axios";
import { Pagination } from "../components/Pagination";

export interface resultProps {
  id: number;
  title: string;
  description: string;
}

export const Home = () => {
  const [todos, setTodos] = useState<resultProps[]>([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(10);

  // Get all todos
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);

        const res = await axios.get("http://localhost:8800/todos");

        const data = await res.data;

        console.log(data);

        setTodos(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTodos();
  }, []);

  // Get current todos
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  // Change page
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  return (
    <div>
      <div className="todos__container mt-10 ml-10 text-center">
        {loading ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : (
          <Todos todos={currentTodos} />
        )}
      </div>
      <div className="mt-3 gap-1">
        <Pagination
          todosPerPage={todosPerPage}
          totalTodos={todos.length}
          paginateBack={paginateBack}
          paginateFront={paginateFront}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};
