import { Movies } from "../../models/Movies";

export const parseMovies = (movies: unknown): Movies[] => {
  if (Array.isArray(movies)) {
    return movies.map(parseMovie).filter(Boolean);
  }
  return [];
};

export const parseMovie = (movie: unknown): Movies | undefined => {
  if (
    movie !== null &&
    "_id" in movie &&
    "title" in movie &&
    "poster_path" in movie &&
    "overview" in movie &&
    "original_title" in movie &&
    "genres" in movie &&
    "contentType" in movie &&
    "backdrop_path" in movie
  ) {
    return {
      _id: Number(movie["_id"]),
      title: String(movie["title"]),
      poster_path: String(movie["poster_path"]),
      overview: String(movie["overview"]),
      original_title: String(movie["original_title"]),
      genres: movie["genres"] as string[],
      first_aired: String(movie["first_aired"]),
      contentType: String(movie["contentType"]),
      backdrop_path: String(movie["backdrop_path"]),
    };
  }
  return undefined;
};
