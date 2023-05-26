import React from "react";
import "../styles/navbar.css";

export default function Navbar({ search, inputValue, setInputValue }) {
  return (
    <div className="navbar">
      <span className="heading">Movie Db</span>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={search}
        placeholder="Search.."
        className="search-bar"
      ></input>
    </div>
  );
}
