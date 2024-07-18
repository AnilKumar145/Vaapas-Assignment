import React, { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

const MovieCard = ({ movie }) => {
  const [dogImage, setDogImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      setDogImage(response.data.message);
      setLoading(false);
    });
  }, []);

  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      {loading ? (
        <ThreeDots
          height="40"
          width="40"
          radius="9"
          color="#00BFFF"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={true}
        />
      ) : (
        <img src={dogImage} alt="Random Dog" />
      )}
    </div>
  );
};

export default MovieCard;
