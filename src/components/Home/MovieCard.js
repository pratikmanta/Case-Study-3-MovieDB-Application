import React from 'react'

const MovieCard = ({movies}) => {
    return (
        <div style={{cursor:'pointer'}} className='col p-1 bg-warning border rounded'>          
            <div className='ml-1'>
                <img alt="poster" width='170' height='220' src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`}/>
            </div>
            <h5 className='text-dark font-weight-bold pt-2 text-center '>{movies.title}</h5>    
        </div>           
    )
}

export default MovieCard;