import { FC } from "react";
import "./Table.scss";

interface ITable {
  Year: string;
  Released: string;
  BoxOffice: string;
  Country: string;
  Production: string;
  Actors: string;
  Director: string;
  Writer: string;
}

export const Table: FC<ITable> = ({
  Year,
  Released,
  BoxOffice,
  Country,
  Production,
  Actors,
  Director,
  Writer,
}) => {
  return (
    <table className="movie__table">
      <tr key="1" className="movie__table-row">
        <td className="movie__table-cell">Year</td>
        <td className="movie__table-cell-response">{Year}</td>
      </tr>
      <tr key="2" className="movie__table-row">
        <td className="movie__table-cell">Released</td>
        <td className="movie__table-cell-response">{Released}</td>
      </tr>
      <tr key="3" className="movie__table-row">
        <td className="movie__table-cell">BoxOffice</td>
        <td className="movie__table-cell-response">{BoxOffice}</td>
      </tr>
      <tr key="4" className="movie__table-row">
        <td className="movie__table-cell">Country</td>
        <td className="movie__table-cell-response">{Country}</td>
      </tr>
      <tr key="5" className="movie__table-row">
        <td className="movie__table-cell">Production</td>
        <td className="movie__table-cell-response">{Production}</td>
      </tr>
      <tr key="6" className="movie__table-row">
        <td className="movie__table-cell">Actors</td>
        <td className="movie__table-cell-response">{Actors}</td>
      </tr>
      <tr key="7" className="movie__table-row">
        <td className="movie__table-cell">Director</td>
        <td className="movie__table-cell-response">{Director}</td>
      </tr>
      <tr key="8" className="movie__table-row">
        <td className="movie__table-cell">Writers</td>
        <td className="movie__table-cell-response">{Writer}</td>
      </tr>
    </table>
  );
};
