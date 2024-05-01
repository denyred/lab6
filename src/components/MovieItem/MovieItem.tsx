import { FC, useState } from "react";
import "./index.scss";
import classNames from "classnames";
import { MovieController } from "../../api/MovieController";
interface Props {
  _id: number;
  title: string;
  src: string;
}

export const MovieItem: FC<Props> = ({ _id, title, src }) => {
  const _isFavorite = MovieController.getFavoriteMovies()?.includes(_id);

  const [isFavorite, setIsFavorite] = useState(!!_isFavorite);

  const favoriteClassnames = classNames(
    "moviesSprite--container--item--favorite",
    {
      active: isFavorite,
    }
  );

  const setFavorite = () => {
    if (isFavorite) {
      MovieController.removeFavoriteMovie(_id);
    } else {
      MovieController.setFavoriteMovie(_id);
    }
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="moviesSprite--container--item">
      <div className="moviesSprite--container--item--image">
        <img src={src} />
        <div onClick={setFavorite} className={favoriteClassnames}></div>
      </div>
      <div className="moviesSprite--container--item--title">{title}</div>
    </div>
  );
};
