import React,  { useState }  from "react"
import './App.css';
import '../node_modules/bulma/css/bulma.css'
import { Title } from './components/Title';
import SearchForm from './components/SearchForm';
import MoviesList from './components/MoviesList'

function App() {
  
  const [moviesResults, setMoviesResults] = useState([])
  const [usedSearch, setUsedSearch] = useState(false);

  const handleResults = (e) => { 
    setMoviesResults(e);
    setUsedSearch(true);
  }

  return (
    <div className="App">
      <Title>We are in business</Title>
      <div className='center'>
        <SearchForm onMoviesResults={handleResults}/>
      </div>
      { 
        usedSearch ? 
          moviesResults.length === 0 ? 
                <p>No existen peliculas</p> 
                : <MoviesList movies={moviesResults}  />
          : <p>Realice primero la busqueda</p>
      }
    </div>
  );
}

export default App;
