import "./App.css";
// import reqeuests from './requests';
// import Row from './Row';
// import Banner from './Banner';
import { useState } from "react";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import MovieDetails from "./MovieDetails";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [movie, setMovie] = useState({});

  return (
    <Router basename="/">
      <div className="app">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/netflix-clone" element={<Home />} />
          {/* <Banner />
            <Row title="NetFlix Originals" fetchUrl={reqeuests.fetchNetflixOriginal} isLargeRow/>
            <Row title="Trending Now" fetchUrl={reqeuests.fetchTreding} />
            <Row title="Action Movies" fetchUrl={reqeuests.fetchActionMovies} />
            <Row title="Top Rated" fetchUrl={reqeuests.fetchTopRated} />
            <Row title="Horror Movies" fetchUrl={reqeuests.fetchHorrorMovies} />
            <Row title="Romance" fetchUrl={reqeuests.fetchRomanceMovies} />
            <Row title="Comedy" fetchUrl={reqeuests.fetchComedyMovies} />
            <Row title="Documentaries" fetchUrl={reqeuests.fetchDocumentaries} /> */}
          <Route path="/details/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
