import React from "react";
import { MovieList } from "../components";

export default function Movie({ isLoading, movieList }) {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        This is the Movie Page
      </h1>
      <MovieList isLoading={isLoading} movieList={movieList} />
    </div>
  );
}
