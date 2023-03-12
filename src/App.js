/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */
import { useEffect, useState } from "react";
import { LogoStamp } from "./Heading/LogoStamp";
import SearchBox from "./Heading/SearchBox";
import MovieBox from "./Components/MovieBox";
import FavouriteAdd from "./Favourites/FavouriteAdd";
import FavouriteRemove from "./Favourites/FavouriteRemove";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState(() => {
    return JSON.parse(localStorage.getItem("movies-favourites")) ?? [];
  });

  const [searchValue, setSearchValue] = useState("time");

  const fetchMovies = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=b883439f`;
    const response = await fetch(url);

    const resData = await response.json();
    if (resData.Search) {
      setMovies(resData.Search);
    }
  };

  const addToFavourites = (movie) => {
    const newFavourite = [...favourites, movie];
    setFavourites(newFavourite);
  };

  const removeFromFavourites = (movie) => {
    const newFavourite = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavourite);
  };

  useEffect(() => {
    fetchMovies(searchValue);
  }, [searchValue]);

  useEffect(() => {
    localStorage.setItem("movies-favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <div className="App">
      <div className="App_container">
        <div className="App_header">
          <LogoStamp head="MOVIES" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="movies_container">
          <div className="movies_content">
            <MovieBox
              movies={movies}
              handleOnClickFavourites={addToFavourites}
              favouriteComponent={FavouriteAdd}
            />
          </div>
        </div>
        <div className="App_intermediary_header">
          <LogoStamp head="FAVOURITES" />
        </div>
        <div className="movies_container">
          <div className="movies_content">
            <MovieBox
              movies={favourites}
              handleOnClickFavourites={removeFromFavourites}
              favouriteComponent={FavouriteRemove}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
