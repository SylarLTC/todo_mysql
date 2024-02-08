import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NewTodo = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleClick = async () => {
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
    <div className="flex justify-center items-center h-[75vh]">
      <div className="flex flex-col gap-2 w-1/4 bg-stone-200 p-4 rounded-md">
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
        <div className="btn__container flex justify-end">
          <button className="btn mt-2" onClick={handleClick}>
            Submit!
          </button>
        </div>
      </div>
    </div>
  );
};
