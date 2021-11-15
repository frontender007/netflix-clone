import React, { useState, useEffect } from 'react';
import './MovieDetails.css';
import { useParams, useNavigate } from 'react-router-dom';


function MovieDetails() {
    let history = useNavigate();
    const baseImageUrl = 'https://image.tmdb.org/t/p/original';
    const baseUrl = 'http://api.themoviedb.org/3/movie/';
    const APIKEY = '31c5922e6ef19e6cb836a9dfe6768e66';

    const [movie, setMovie] = useState({});
    const params = useParams();

    useEffect(() => {
        getMovie();
    }, [])

    const getMovie = async () => {
        const request = await fetch(`${baseUrl}${params.id}?api_key=${APIKEY}`);
        const data = await request.json();
        console.log(data);
        setMovie(data);
    }

    return (
        <div className="movie">
            <button className="btn-back" onClick={() => history('/')}>Go Back</button>
           <div className="movie_poster">
                <img src={`${baseImageUrl}/${movie.poster_path}`} alt="Movie Poster" />
           </div>
           <div className="movie_details">
           <h1>{movie?.name || movie?.title || movie?.original_title}</h1>
           <h3 className="movie_tagline">{movie.tagline}</h3>
           <p className="description">
               {movie.overview}
           </p>
           
           </div>
        </div>
    )
}

export default MovieDetails
