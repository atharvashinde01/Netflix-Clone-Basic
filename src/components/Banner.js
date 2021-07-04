import React, { useEffect, useState } from 'react'
import "../css/Banner.css";
import moviesContainer from "../movies"

const Banner = () => {

    const [movie, setMovie] = useState();
    const [backgroundMovie, setBackgroundMovie] = useState("");

    useEffect(() => {
        setMovie(moviesContainer[0].movies[Math.floor((Math.random() * moviesContainer[0].movies.length - 1) | 0)])
    }, [])

    useEffect(() => {
        setBackgroundMovie(movie?.bigPoster)
    },[movie])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    return (
        <header style={{background:`url(${backgroundMovie})`}} className="banner">
            <div className="banner__contents">
                <div className="banner__title">
                    <h1>{movie?.name}</h1>
                </div>
                <div className="banner__buttons">
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <div className="banner__description">
                    {truncate(movie?.description, 150)}
                </div>
            </div>

            <div className="banner--fadeBottom">

            </div>
        </header>
    )
}

export default Banner

