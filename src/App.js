import "./App.css";
import { Navbar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import About from "./pages/About";
import Movie from "./pages/Movie";
import MovieDetails from "./pages/MovieDetails";
import Home from "./pages/Home";

const API_BASE_URL = "http://www.omdbapi.com";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const search = async (e) => {
    if (e.code === "Enter") {
      console.log("I pressed the enter");
      console.log(inputValue, "Search term");
      setIsLoading(true);
      const response = await axios.get(
        API_BASE_URL + "/?s=" + inputValue + "&apikey=aa660442"
      );
      console.log(response.data);
      setMovies(response.data.Search);
      setIsLoading(false);
    }
  };
  return (
    <div className="main">
      <Navbar
        search={search}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/movie-details"
            element={<Movie isLoading={isLoading} movieList={movies} />}
          />
          <Route path="/movie-details/:id" element={<MovieDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <MovieList isLoading={isLoading} movieList={movies} /> */}
    </div>
  );
}

export default App;
