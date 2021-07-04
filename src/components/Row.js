import React from 'react'
import "../css/Row.css"

const Row = ({title, movies, id, changeOverlay, setSelectedTrailer}) => {
    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__horizontal">
                <ul className="row__items--container">
                    {movies.map(movie => <l1 onClick={() => {
                        changeOverlay(true);
                        setSelectedTrailer(movie.trailerUrl);
                    }} className="row__item">
                        <img className={`row__poster ${id === 0 ? "row__posterLarge" : ""}`} src={movie.displayPoster} alt={movie.name} />
                        <span className="title__name">{movie.name}</span>
                    </l1>)}
                </ul>
            </div>
        </div>
    )
}

export default Row
