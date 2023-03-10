import "./MovieCart.css";

function MovieCart(props) {
  const movie = props.movie;
  const FavouriteComponent = props.favouriteComponent;
  return (
    <li key={movie.imdbID} className="movie_element">
      <div className="movie_wrapper">
        <img src={movie.Poster} alt="movie_error" className="movie_poster" />
        <button
          className="btn_fav"
          onClick={() => props.handleOnClickFavourites(movie)}
        >
          <FavouriteComponent />
        </button>
      </div>
    </li>
  );
}
export default MovieCart;
