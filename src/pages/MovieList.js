import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GridStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const MovieItemStyle = styled.div`
  margin: 10px;
  border: 1px solid black;
`;

const MovieList = () => {
  // {
  //     id: "",
  //     title: "",
  //     rating: "",
  //     medium_cover_image: "",
  //     summary: "",
  // }
  const [movies, setMovies] = useState([]);

  function movieListFetch() {
    fetch("http://10.100.102.2:8000/api/movie")
      .then((res) => res.json())
      .then((res) => {
        setMovies(res);
      });
  }

  useEffect(() => {
    movieListFetch();
  }, []);

  const movieDelete = (id) => {
    fetch("http://10.100.102.2:8000/api/movie/" + id, {
      method: "delete",
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          setMovies(movies.filter((movie) => movie.id !== id));
        }
      });
  };

  return (
    <div className="container">
      <GridStyle>
        {movies.map((movie) => (
          <MovieItemStyle key={movie.id}>
            <img
              src={movie.medium_cover_image}
              style={{ width: "100%", height: 300 }}
            />
            <h3>{movie.title}</h3>
            <Link className="buttonBlue" movie={movie} to={"/movie/" + movie.id}>
              상세보기
            </Link>

            <button className="buttonRed" onClick={() => movieDelete(movie.id)}>
              삭제
            </button>
          </MovieItemStyle>
        ))}
      </GridStyle>
    </div>
  );
};

export default MovieList;
