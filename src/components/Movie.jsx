import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [movie, setMovie] = useState();
  let { id } = useParams();

  useEffect(() => {
    let myMovie = {
      id: 1,
      title: "Shawshank Redemption",
      release_date: "1994-09-23",
      runtime: 142,
      mpaa_rating: "R",
      description:
        "Two imprisoned Persons bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    };
    setMovie(myMovie);
  }, [id]);
  return (
    <div>
      <h2>{movie.title}</h2>
      <small>
        <em>
          {movie.release_date}, {movie.runtime} minutes, Rated{" "}
          {movie.mpaa_rating}
        </em>
      </small>
      <hr />
      <p>{movie.description}</p>
    </div>
  );
};

export default Movie;
