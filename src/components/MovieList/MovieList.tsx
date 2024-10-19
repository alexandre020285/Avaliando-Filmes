import { useEffect, useState } from "react";
import "./MovieList.scss";
import axios from "axios";
import { Movie } from "../../Types/movie";
import MovieCard from "../MovieCard/MovieCard";
import  "./MovieList.scss";
import ReactLoading from 'react-loading'; 
import "../../Types/Loading.tsx"; 



// CRIANDO A FUNÇÃO PARA CLASSIFICAR EM TSX OPS OBJ
export function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "b36a84888c792bb0b454ab9eb0745a87",
        language: "pt-BR",
      },
    }).then((response) => {
      // console.log(response.data.results);
      setMovies(response.data.results);
    });

    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
      <ReactLoading type="spin" color="#6046ff" height={'5%'} width={"5%"} />
      </div>
    );
  }

  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
