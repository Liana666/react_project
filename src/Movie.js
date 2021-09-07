import React, { createElement, createRef, useEffect, useState } from "react";

function Movie() {

    const [hasError, setErrors] = useState(false);
    const [movie, addMovie] = useState({});

    let inputValue = React.createRef();

    const imgSrc = 'https://image.tmdb.org/t/p/original/';

    function getMovie() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${inputValue.current.value}&api_key=d495d35d47c329b48d81d83ed0f10265`)
            .then((response) => {
                return response.json();

            })
            .then((data) => {
                console.log(addMovie(data))
            })
            .catch(err => setErrors(err));
    }


    return (
        <div>
            <input type="text" ref={inputValue} />
            <button onClick={getMovie}>Search</button>
            {/* <div className="out">
                {movie.map((item) => (
                    <li>{item.original_title}</li>
                ))}
                <span>{JSON.stringify(movie)}</span>
            </div> */}
        </div>
    )
}

export default Movie;