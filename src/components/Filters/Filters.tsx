import { FC } from "react";
import "./index.scss";
interface Props {
  onChange: (value: string) => void;
  genres: string[];
}

export const Filters: FC<Props> = ({ genres, onChange }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {genres.map((genre) => (
        <option key={genre} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
};
