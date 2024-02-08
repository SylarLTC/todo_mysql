import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewTodo } from "./pages/NewTodo";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newtodo" element={<NewTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
