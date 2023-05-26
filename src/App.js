import "./App.css";
import { Navbar, MovieList } from "./components";
import { useState } from "react";
import axios from "axios";

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
      <MovieList isLoading={isLoading} movieList={movies} />
    </div>
  );
}

export default App;
