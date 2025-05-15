import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let moviesList = [
      {
        id: 1,
        title: "Shawshank Redemption",
        release_date: "1994-09-23",
        runtime: 142,
        mpaa_rating: "R",
        description:
          "Two imprisoned Persons bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      },
      {
        id: 2,
        title: "The Godfather",
        release_date: "1972-03-24",
        runtime: 175,
        mpaa_rating: "R",
        description:
          "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      },
      {
        id: 3,
        title: "The Dark Knight",
        release_date: "2008-07-18",
        runtime: 152,
        mpaa_rating: "PG-13",
        description:
          "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      },
    ];
    setMovies(moviesList);
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      <hr />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Release Date</th>
            <th>MPAA Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((m) => (
            <tr key={m.id}>
              <td>
                <Link to={`/movies/${m.id}`}>{m.title}</Link>
              </td>
              <td>{m.release_date}</td>
              <td>{m.mpaa_rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Movies;
