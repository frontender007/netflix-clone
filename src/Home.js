import React from 'react';
import reqeuests from './requests';
import Row from './Row';
import Banner from './Banner';

function Home() {
    return (
        <div>
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
    )
}

export default Home
