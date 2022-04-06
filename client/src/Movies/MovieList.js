import React from 'react';

import { Link } from "react-router-dom";

import MovieCard from "./MovieCard";

export default function MovieList(props) {

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <div className="movie-card" key={movie.id}> 
        <Link to={`/movies/${movie.id}`}>
        <MovieCard key={movie.id} movie={movie} />
        </Link>
        </div>
      ))}
    </div>
  );
}
