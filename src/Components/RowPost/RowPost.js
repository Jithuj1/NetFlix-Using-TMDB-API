import React, { useEffect, useState } from "react";
import "./RowPost.css";
import YouTube from "react-youtube";
import axios from "../../axios";
import { API_KEY, img_url } from "../../Constants/Constants";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data.results[9]);
        setMovies(response.data.results);
      })
      .catch((err) => {
        // alert('Network error')
      });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      authoplay: 1,
    },
  };
  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("array empty");
        }
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((object) => (
          <img
            onClick={() => handleMovie(object.id)}
            className={props.isSmall ? "small-posters" : "poster"}
            src={`${img_url + object.backdrop_path}`}
            alt=""
          />
        ))}
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;
