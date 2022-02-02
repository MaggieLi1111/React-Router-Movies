import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router';

import MovieCard from './MovieCard';

export default function Movie(props) {
  const [movie, setMovie] = useState();

  let { id } = useParams();
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`) // Study this endpoint with Postman
      .then(res => {
        // Study this response with a breakpoint or log statements
        // and set the response data as the 'movie' slice of state
        console.log(res)
        setMovie(res.data)
      })
      .catch(err => {
        console.error(err);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }
  const saveMovie = id => {
    props.saveMovie(id);
  }


  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <MovieCard movie={movie} />
        <h3>Actors</h3>

        {movie.stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button" onClick={() => saveMovie(movie.id)}>Save</div>
    </div>
  );
}
