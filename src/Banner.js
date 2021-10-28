import axios from 'axios';
import React, { useState, useEffect } from 'react';
import requests from './requests';
import "./Banner.css";

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect( () => {
        async function fetchMovie() {
            const request = await axios.get(requests.fetchNetflixOriginal);
            const randomIndex = Math.floor(Math.random() * request.data.results.length);
            setMovie(request.data.results[randomIndex]);
            return request;
        } 

        fetchMovie();
    }, []);
    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }
    
    return (
        <header className="banner"
            style={{ 
                backgroundImage:`url("https://image.tmdb.org/t/p/original${movie.backdrop_path}"`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h3 className="banner__description">{truncate(movie?.overview, 150)}</h3>
            </div>
            <div className="banner__fadebottom"></div>
        </header>
    )
};

export default Banner;