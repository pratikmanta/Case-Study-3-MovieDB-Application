import React from 'react'
import { config } from '../../config/config'
import ResultMovieCard from './ResultMovieCard'

class MovieSearch extends React.Component {
    
    // add to watchlist 
    addToList = (movie) => {
        const { addWatchlistUrl } = config()
        let id = movie.id
        let session_id = sessionStorage.getItem('session_id')
        fetch(addWatchlistUrl + session_id, {
            mode: "cors",
            method: 'post',
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                "media_type": "movie",
                "media_id": id,
                "watchlist": true
            })
        })
        .then(() => {
            
        })
    }

    render() {

        const { onSearchChange, onSubmitSearch, searchResults, toggleModal } = this.props
        const movieSearchResults = searchResults.map((item) => {
            return (
                <ResultMovieCard key={item.id} addToList={this.addToList} item={item} />
            )
        })

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className=" form card-body row align-items-center">
                            <div className="col">
                                <input className="form-control form-control-lg form-control-borderless" name='query' onChange={onSearchChange} type="text" placeholder="Search Movie" />
                            </div>
                        </div>
                        <div className="row pb-2">
                            <input className="btn col-5 mx-auto btn-lg btn-danger" type="submit" value='Search' onClick={onSubmitSearch} />
                            <div className="btn col-5 mx-auto btn-lg btn-danger" onClick={() => toggleModal()}>Your WatchList</div>
                        </div>
                    </div>
                </div>
                <div className='container mt-2'>
                    {movieSearchResults}
                </div>
            </div>
        )
    }
}

export default MovieSearch;

