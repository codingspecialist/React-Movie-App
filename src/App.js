import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Movie from "./pages/Movie";
import MovieDetail from "./pages/MovieDetail";
import MovieList from "./pages/MovieList";

function App() {
  return (
    <div>
      <Nav />
      <Route path="/" exact={true} component={MovieList} />
      <Route path="/movie" exact={true} component={Movie} />
      <Route path="/movie/:id" exact={true} component={MovieDetail} />
    </div>
  );
}

export default App;
