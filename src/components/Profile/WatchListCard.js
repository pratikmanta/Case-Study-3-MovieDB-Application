import React from 'react'

const WatchListCard = ({item}) => {
        return (    
        <div className='row h-50 card-lg bg-secondary text-light shadow-lg p-3 mb-4 rounded '>
            <div className='col-md-5'>
                <img className='rounded' alt='poster' width='250' height='300' src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}/>
            </div>
            <div className='col p-1 m-1'>
                <h2>{item.title}</h2>
                <p>{item.overview}</p>
                <h4>Rating: {item.vote_average}</h4>
                <h4>Release-Date: {item.release_date}</h4>                  
            </div>
        </div>     
        )
    
    
}

export default WatchListCard;

