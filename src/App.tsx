import { useEffect, useState } from "react";
import { MovieItem } from "./components/MovieItem/MovieItem";
import { Movies } from "./models/Movies";
import { MovieController } from "./api/MovieController";
import { NavLink } from "./components/NavLink";
import { parseMovies } from "./api/readers";
import { Filters } from "./components/Filters/Filters";

export const App = () => {
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    async function fethMovies() {
      const data = await MovieController.getMovies().then((res) => res.data);
      const movies = parseMovies(data.movies);
      setMovies(movies);
    }

    fethMovies();
  }, []);

  const changeFilter = async (genre: string) => {
    const data = await MovieController.getMovies().then((res) => res.data);
    const movies = parseMovies(data.movies);

    const _movies = movies.filter((movie) => movie.genres.includes(genre));

    setMovies(_movies);
  };

  const movieGenres = movies.map((movie) => movie.genres).flat();
  const _movieGenres = [...new Set(movieGenres)];
  return (
    <div className="moviesSprite">
      <NavLink />
      <div className="moviesSprite--wrapper">
        <div className="moviesSprite--wrapper--filters">
          <div className="moviesSprite--genre">Movies</div>
          <Filters genres={_movieGenres} onChange={changeFilter} />
        </div>

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
