import React from 'react'
import MovieCard from '../Home/MovieCard'


const MovieList = ({movieData}) => {
    const movieArray = movieData.map((movies,index) => {
        return <MovieCard key={index} movies={movies}/>
    })
    return (
            <div className='row mt-0'>
                {movieArray}
            </div>
        )
    }

        
export default MovieList