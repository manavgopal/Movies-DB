import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="redirect-buttons">
      <h1>This is home page</h1>
      <span>
        <Link to={"/movie-details"}>
          <button
            style={{
              marginTop: "20px",
              borderRadius: "12px",
              width: "300px",
              height: "50px",
              fontSize: "17px",
            }}
          >
            Click here to browse movies
          </button>
        </Link>
      </span>
      <span>
        <Link to={"/about"}>
          <button
            style={{
              marginTop: "20px",
              borderRadius: "12px",
              width: "300px",
              height: "50px",
              fontSize: "17px",
            }}
          >
            Click here to got to about page
          </button>
        </Link>
      </span>
    </div>
  );
}
