import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { API_KEY, img_url } from "../../Constants/Constants";
import "./Banner.css";


function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        console.log(response.data.results);
        setMovie(response.data.results[1]);
      });
  }, []);
  return (
    <div style={{backgroundImage:`url(${movie ? img_url+movie.backdrop_path: "" })`}} className="banner">
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner-buttons">
          <button>Play</button>
          <button>My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade-bottam"></div>
    </div>
  );
}

export default Banner;
