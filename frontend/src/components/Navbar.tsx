import React, { useState } from "react";

export const Navbar = () => {
  const [inputSearch, setInputSearch] = useState<string>("");

  const onChangeInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  };
  return (
    <div className="navbar__container">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" href="/">
            My Todos
          </a>
        </div>
        <div className="flex-none gap-10 mr-4">
          <div className="form-control">
            <input
              id="Search"
              name="Search"
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              onChange={onChangeInputSearch}
              value={inputSearch}
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Avatar" src="" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between" href="/profile">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a href="/settings">Settings</a>
              </li>
              <li>
                <a href="/logout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
