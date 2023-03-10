import MovieCart from "./MovieCart";
import "./MovieBox.css";

function MovieBox(props) {
  const movies = props.movies;
  const handleOnClickFavourites = props.handleOnClickFavourites;
  return (
    <div className="mvi_content">
      <ul className="movies_library">
        {movies.map((movie) => {
          return (
            <MovieCart
              key={movie.imdbID}
              movie={movie}
              handleOnClickFavourites={handleOnClickFavourites}
              favouriteComponent={props.favouriteComponent}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default MovieBox;
