import axios from "axios";
import { LocalStorageController } from "./LocalStorageController";
import { FAVORITE_MOVIES } from "./constants";

export class MovieController {
  static getMovies = async () => {
    return axios.get("https://movies-api14.p.rapidapi.com/movies", {
      headers: {
        "x-rapidapi-key": "ce8509b1bamsh5370e5064876615p154c6ajsn620311bed247",
        "x-rapidapi-host": "movies-api14.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    });
  };

  static getShows = async () => {
    return axios.get("https://movies-api14.p.rapidapi.com/shows", {
      headers: {
        "x-rapidapi-key": "ce8509b1bamsh5370e5064876615p154c6ajsn620311bed247",
        "x-rapidapi-host": "movies-api14.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    });
  };

  static getFavoriteMovies = () => {
    return LocalStorageController.getItem<number[]>(FAVORITE_MOVIES);
  };

  static removeFavoriteMovie = (_id: number): void => {
    const favoriteMovies = this.getFavoriteMovies();

    if (favoriteMovies) {
      const _favoriteMovies = favoriteMovies.filter((id) => id !== _id);
      LocalStorageController.setItem(FAVORITE_MOVIES, _favoriteMovies);
    }
  };

  static setFavoriteMovie = (_id: number): void => {
    const favoriteMovies = this.getFavoriteMovies();

    if (favoriteMovies) {
      const _favoriteMovies = [...new Set([...favoriteMovies, _id])];
      LocalStorageController.setItem(FAVORITE_MOVIES, _favoriteMovies);
      return;
    }

    LocalStorageController.setItem(FAVORITE_MOVIES, [_id]);
  };
}
