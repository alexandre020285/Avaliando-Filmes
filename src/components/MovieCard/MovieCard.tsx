import { Movie } from "../../Types/movie";
import StarRating from "../StarRating/StarRating";
import "./MovieCard.scss";

export interface Props {
  movie: Movie;
}

export default function MovieCard(props: Props) {
  const movie = props.movie;
  return (
    <li className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <div className="movie-info">
        <p className="movie-title">{movie.title}</p>
        {/* Passando a nota média como uma prop */}
        <StarRating rating={movie.vote_average} />

        <div className="hidden-content">
          {movie.overview && (
            <p className="description">
              {movie.overview.length > 100
                ? movie.overview.substring(0, 100) + "..."
                : movie.overview}
            </p>
          )}
        

        <button className="btn-default">Ver mais</button>
        </div>

        <p>{movie.vote_average}</p>
      </div>
    </li>
  );
}
