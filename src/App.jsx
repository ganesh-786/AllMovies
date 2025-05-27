import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fav from "./pages/Fav";
import Card from "./components/card";
import { fetchMovies, SearchMovies } from "./services/api";

function App() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        console.log(fetchMovies);
        // Fetch popular movies from the API
        const popularmovies = await fetchMovies();
        setmovies(popularmovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getMovies();
  }, []);
  // useEffect to fetch movies when the component
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fav" element={<Fav />} />
      </Routes>

      <Card movies={movies} />
    </>
  );
}

export default App;
