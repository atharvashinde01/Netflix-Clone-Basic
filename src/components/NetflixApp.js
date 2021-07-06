import React from "react";
import { useState } from "react";
import Banner from "./Banner";
import Nav from "./Nav";
import Overlay from "./Overlay";
import Row from "./Row";
import moviesContainer from "../movies";

const NetflixApp = () => {
  const [isOverlay, setIsOverlay] = useState(false);

  const [selectedTrailer, setSelectedTrailer] = useState("");

  const changeOverlay = (bool) => {
    setIsOverlay(bool);
  };

  return (
    <div>
      {isOverlay && (
        <Overlay
          selectedTrailer={selectedTrailer}
          changeOverlay={changeOverlay}
        />
      )}
      <Nav />
      <Banner />

      {moviesContainer.map((moviesList) => (
        <Row
          setSelectedTrailer={setSelectedTrailer}
          changeOverlay={changeOverlay}
          key={moviesList.id}
          id={moviesList.id}
          movies={moviesList.movies}
          title={moviesList.name}
        />
      ))}
    </div>
  );
};

export default NetflixApp;
