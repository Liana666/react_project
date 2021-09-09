import React, { createElement, createRef, useEffect, useState } from "react";

export default function Movie() {

    const [hasError, setErrors] = useState(false);
    const [movie, addMovie] = useState([]);

    let inputValue = React.createRef();

    const imgSrc = 'https://image.tmdb.org/t/p/original/';

    function getMovie() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${inputValue.current.value}&api_key=d495d35d47c329b48d81d83ed0f10265`)
            .then((response) => {
                return response.json();

            })
            .then((data) => {
                addMovie(data.results);
                console.log(data.results);

            })
            .catch((error) => setErrors(error));
    }


    return (
        <div>
            <input type="text" ref={inputValue} />
            <button onClick={getMovie}>Search</button>
            <div className="out">
                {movie.length !== 0 ? movie.map((item) => <li><img style={{ width: 150 }} src={`${imgSrc}${item.poster_path}`} /> {item.original_title}</li>) : 'No movies'}
            </div>
        </div>
    )




}
