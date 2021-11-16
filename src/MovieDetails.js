import React, { useState, useEffect } from 'react';
import './MovieDetails.css';
import { useParams, useNavigate } from 'react-router-dom';
import imageNotFound from './assets/images/image-not-found.png';


function MovieDetails() {
    let history = useNavigate();
    const baseImageUrl = 'https://image.tmdb.org/t/p/original';
    const baseUrl = 'https://api.themoviedb.org/3/movie';
    const APIKEY = '31c5922e6ef19e6cb836a9dfe6768e66';

    const [movie, setMovie] = useState({});
    const params = useParams();

    useEffect(() => {
        getMovie();
    }, []);

    const handleError = () => {
        alert('Movie not found');
        setTimeout( () => {
            history('/');
        }, 1000);
    }

    const getMovie = async () => {
        const response = await fetch(`${baseUrl}/${params.id}?api_key=${APIKEY}`);
        
        if (response.ok) {
            const data = await response.json();
            if (data !== null) setMovie(data);
        } else {
            handleError();
        }
    }

    let moviePoster = movie.backdrop_path;
    
    if (moviePoster == null) {
        moviePoster = imageNotFound;
    } else {
        moviePoster = baseImageUrl + moviePoster;
    }

    // )
    console.log(movie);
    return (
        <div className="movie">
            <div className="banner"
            style={{ 
                backgroundImage:`url("${moviePoster}"`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat"
            }}>
            </div>
            <div className="movie_details">
                <div className="movie_image">
                    <img src={moviePoster} alt="Movie poster" />
                </div>
                <div className="movie_overview">
                    <h1>{movie?.name || movie?.title || movie?.original_title}</h1>
                    <h3>{movie?.tagline}</h3>
                    <p>{movie.overview}</p>
                    <div className="more_details">
                        <div>
                            <p>{movie.release_date && `Release Date: ${movie?.release_date}`}</p>
                            <p>{movie.genres && `Genres: ${movie?.genres.map( genre => ' ' + genre.name)}`}</p>
                        </div>
                        <div>
                            <p>{movie.runtime && `Runtime: ${movie?.runtime} minutes`}</p>
                            <p>{movie.vote_average && `IMDB Rating: ${movie?.vote_average}`}</p>
                        </div>
                    </div>
                    <button className="btn-back" onClick={() => history('/')}>Go Back</button>
                </div>
            </div>
        </div>
    )
    
}

export default MovieDetails
