import React, { createElement, createRef, useEffect, useState } from "react";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
// import ReactPaginate from 'react-paginate';
// import { width } from "dom-helpers";


export default function Movie() {
    const [isLoaded, setisLoaded] = useState(false);
    const [movie, addMovie] = useState([]);
    let inputValue = React.createRef();
    const imgSrc = 'https://image.tmdb.org/t/p/original/';



    function getMovie() {
        fetch(`https://api.themoviedb.org/3/search/movie?page=1&query=${inputValue.current.value}&api_key=d495d35d47c329b48d81d83ed0f10265`)
            .then((response) => {
                return response.json();

            })
            .then((data) => {
                addMovie(data.results);
                console.log(data)
                setisLoaded(true);

            })
            .catch(error => console.error('Error', error));
    }

    function getPage(e) {
        let page = e.target.innerHTML;

        fetch(`https://api.themoviedb.org/3/search/movie?page=${page}&query=${inputValue.current.value}&api_key=d495d35d47c329b48d81d83ed0f10265`)
            .then((response) => {
                return response.json();

            })
            .then((data) => {
                addMovie(data.results);
                console.log(data)
                setisLoaded(true);

            })
            .catch(error => console.error('Error', error));

        window.scrollTo(0, 0);
    }




    return (
        <div>

            <input type="text" ref={inputValue} />
            <button onClick={getMovie}>Search</button>
            <div className="out">
                <Row>
                    {isLoaded ? (
                        movie.map((item) => {
                            return (
                                <>
                                    <Col className="cart" xl={8} md={12} xs={24}>
                                        <img style={{ width: '100%' }} src={`${imgSrc}${item.poster_path}`} alt="" />
                                        {item.original_title}
                                    </Col>
                                </>
                            )


                        })
                    ) : (
                        <div></div>
                    )}

                </Row>
            </div >

            {isLoaded ? (
                <div style={{ display: "flex", marginTop: "15px" }}>
                    <div className='page' style={{ width: '30px', height: '30px' }} onClick={getPage}>1</div>
                    <div className='page' style={{ width: '30px', height: '30px' }} onClick={getPage}>2</div>
                    <div className='page' style={{ width: '30px', height: '30px' }} onClick={getPage}>3</div>
                </div>
            ) : (<div></div>)
            }
        </div >
    )


}
