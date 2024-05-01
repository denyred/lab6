import { useEffect, useState } from "react";
import { MovieController } from "../../api/MovieController";
import { Movies } from "../../models/Movies";
import { MovieItem } from "../MovieItem/MovieItem";
import { NavLink } from "../NavLink";
import { parseMovies } from "../../api/readers";

export const FavoriteMovies = () => {
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    async function fethMovies() {
      const data = await MovieController.getMovies().then((res) => res.data);
      const data2 = await MovieController.getShows().then((res) => res.data);
      const movies = parseMovies(data.movies);
      const shows = parseMovies(data2.movies);
      const favoriteMovies = MovieController.getFavoriteMovies();

      const _movies = movies.filter((movie) =>
        favoriteMovies?.includes(movie._id)
      );

      const _shows = shows.filter((movie) =>
        favoriteMovies?.includes(movie._id)
      );

      setMovies([..._movies, ..._shows]);
    }

    fethMovies();
  }, []);

  return (
    <div className="moviesSprite">
      <NavLink />
      <div className="moviesSprite--wrapper">
        <div className="moviesSprite--genre">Favorites</div>
        <div className="moviesSprite--container">
          {movies.map((movie) => (
            <MovieItem
              _id={movie._id}
              key={movie.title}
              src={movie.poster_path}
              title={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
