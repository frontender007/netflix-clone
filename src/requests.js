const APIKEY = '31c5922e6ef19e6cb836a9dfe6768e66';

const reqeuests = {
    fetchTreding: `https://api.themoviedb.org/3/trending/all/week?api_key=${APIKEY}`,
    fetchNetflixOriginal: `https://api.themoviedb.org/3/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_generes=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_generes=35`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_generes=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_generes=10749`,
    fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_generes=99`
};

export default reqeuests;