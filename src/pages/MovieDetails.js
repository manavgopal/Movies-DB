import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/movie-details.css";

export default function MovieDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `http://www.omdbapi.com/?i=${id}&apikey=aa660442`
      );
      setDetails(response.data);
      setIsLoading(false);
    };
    fetchMovieDetails();
    // console.log(details, "this is the movie details");
  }, [id]);

  if (isLoading) {
    return <h1>Movie details are Loading....</h1>;
  } else if (details) {
    return (
      <div className="details">
        <img src={details.Poster} alt={details.Title} />
        <h1>Title = {details.Title}</h1>
        <h3>Actors = {details.Actors}</h3>
        <h3>Awards = {details.Awards}</h3>
      </div>
    );
  } else return null;
}
