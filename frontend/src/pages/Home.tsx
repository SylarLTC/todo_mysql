import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Todos } from "../components/Todos";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Pagination } from "../components/Pagination";

export interface resultProps {
  id: number;
  title: string;
  description: string;
}

export const Home = () => {
  const [todos, setTodos] = useState<resultProps[]>([]);
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(10);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);

        const res = await axios.get("http://localhost:8800/todos");

        const data = await res.data;

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

  const handleClick = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    try {
      await axios.post("http://localhost:8800/todos", todo);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <Navbar />
      <div className="button__container mt-10 ml-10">
        {/* The button to open modal */}
        <a href="#new_todo" className="btn">
          New Todo <span className="text-lg">+</span>
        </a>
        {/* Modal */}

        <div className="modal" role="dialog" id="new_todo">
          <div className="modal-box flex flex-col gap-1">
            <label htmlFor="title" className="">
              Title
            </label>
            <input
              id="title"
              name="title"
              className="p-1"
              placeholder=""
              onChange={handleChange}
            />
            <label htmlFor="description" className="mt-4">
              Description
            </label>
            <input
              id="description"
              name="description"
              className="p-1"
              placeholder=""
              onChange={handleChange}
            />
            <div className="modal-action">
              <Link to="/" className="btn" onClick={handleClick}>
                Submit!
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="todos__container mt-10 ml-10 text-center">
        {loading ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : (
          <Todos todos={currentTodos} />
        )}
      </div>
      <Pagination
        todosPerPage={todosPerPage}
        totalTodos={todos.length}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
        currentPage={currentPage}
      />
    </div>
  );
};
