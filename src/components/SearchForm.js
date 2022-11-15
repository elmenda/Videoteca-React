import React,  { useState }  from "react"
import * as GLOBAL from '../assets/Constants';

const SearchForm = (props) => {
    
    const [inputMovie, setInputMovie] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${GLOBAL.BASE_URI_OMDB}?apiKey=${GLOBAL.API_KEY}&s=${inputMovie}`)
        .then(data => data.json())
        .then(results => {
            console.log(results)
            props.onMoviesResults(results.Search)
        })

    }

    const handleChange = (e) => {
        setInputMovie(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input className="input" type="text" placeholder="Find a repository" onChange={handleChange} />
                </div>
                <div className="control">
                    <button className="button is-info">
                        Search
                    </button>
                </div>
            </div>
        </form>
    )
}



export default SearchForm