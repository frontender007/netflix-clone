import axios from "axios";
import React, {useState, useEffect} from 'react';
import './Row.css';




const Row = ({title , fetchUrl, isLargeRow}) => {

    const [movies, setMovies] = useState([]);
    const baseImageUrl = 'https://image.tmdb.org/t/p/original';

    useEffect( () => {
        
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);

            return request;
        }

        fetchData();
        
    }, [fetchUrl]);

    console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {
                    movies.map( movie => (
                        
                        <img className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${baseImageUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.title} key={movie.id}/>
                    ))
                }
            </div>
        </div>
    )

}

export default Row;

