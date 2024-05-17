import { Movies } from "../../models/Movies";

export const parseMovies = (movies: unknown): Movies[] => {
  if (Array.isArray(movies)) {
    return movies.map(parseMovie).filter((movie): movie is Movies => movie !== undefined);
  }
  return [];
};

export const parseMovie = (movie: unknown): Movies | undefined => {
  if (
    movie !== null &&
    typeof movie === 'object' &&
    '_id' in movie &&
    'title' in movie &&
    'poster_path' in movie &&
    'overview' in movie &&
    'original_title' in movie &&
    'genres' in movie &&
    'contentType' in movie &&
    'backdrop_path' in movie
  ) {
    const parsedMovie = movie as {
      _id: unknown;
      title: unknown;
      poster_path: unknown;
      overview: unknown;
      original_title: unknown;
      genres: unknown;
      first_aired: unknown;
      contentType: unknown;
      backdrop_path: unknown;
    };
    
    return {
      _id: Number(parsedMovie._id),
      title: String(parsedMovie.title),
      poster_path: String(parsedMovie.poster_path),
      overview: String(parsedMovie.overview),
      original_title: String(parsedMovie.original_title),
      genres: parsedMovie.genres as string[],
      first_aired: String(parsedMovie.first_aired),
      contentType: String(parsedMovie.contentType),
      backdrop_path: String(parsedMovie.backdrop_path),
    };
  }
  return undefined;
};
