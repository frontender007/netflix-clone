import './App.css';
import reqeuests from './requests';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      {/* <h1>FakeFlix - Enjoy watching the movies</h1> */}
      <Nav />
      <Banner />
      <Row title="NetFlix Originals" fetchUrl={reqeuests.fetchNetflixOriginal} isLargeRow/>
      <Row title="Trending Now" fetchUrl={reqeuests.fetchTreding} />
      <Row title="Action Movies" fetchUrl={reqeuests.fetchActionMovies} />
      <Row title="Top Rated" fetchUrl={reqeuests.fetchTopRated} />
      <Row title="Horror Movies" fetchUrl={reqeuests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={reqeuests.fetchRomanceMovies} />
      <Row title="Comedy" fetchUrl={reqeuests.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={reqeuests.fetchDocumentaries} />
    </div>
  );
}

export default App;
