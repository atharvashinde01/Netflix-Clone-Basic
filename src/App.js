import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Overlay from './components/Overlay';
import Row from './components/Row';
import moviesContainer from './movies';

function App() {

  const [isOverlay, setIsOverlay] = useState(false);

  const [selectedTrailer, setSelectedTrailer] = useState("");

  const changeOverlay = (bool) => {
    setIsOverlay(bool);
  }

  return (
    <div className="app">
      {isOverlay && <Overlay selectedTrailer={selectedTrailer} changeOverlay={changeOverlay}/>}
      <Nav />
      <Banner />

      {moviesContainer.map(moviesList => (
        <Row setSelectedTrailer={setSelectedTrailer} changeOverlay={changeOverlay} key={moviesList.id} id={moviesList.id} movies={moviesList.movies} title={moviesList.name} />
      ))}
    </div>
  );
}

export default App;
