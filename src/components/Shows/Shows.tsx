import { useEffect, useState } from "react";
import { MovieController } from "../../api/MovieController";
import { Movies } from "../../models/Movies";
import { MovieItem } from "../MovieItem/MovieItem";
import { NavLink } from "../NavLink";

export const Shows = () => {
  const [shows, setShows] = useState<Movies[]>([]);

  useEffect(() => {
    async function fetchShows() {
      const data = await MovieController.getShows().then((res) => res.data);

      setShows(data.movies);
      console.log(data);
    }

    fetchShows();
  }, []);

  return (
    <div className="moviesSprite">
      <NavLink />
      <div className="moviesSprite--wrapper">
        <div className="moviesSprite--genre">Shows</div>
        <div className="moviesSprite--container">
          {shows.map((movie) => (
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
