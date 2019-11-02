import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class ResultMovieCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            alert:''
        }

    }
    alert = (movie) => {
        this.setState({alert:'Succesfully added to watchlist'},() => {
            this.props.addToList(movie)
            toast.success('Succesfully added to WatchList',{
                position: 'bottom-center'
            })
        })
    }
    
    render() {
        const {item} = this.props 
        return (
            <div className='row card-lg bg-secondary text-light shadow-lg p-3 mb-4 rounded'>
                <div className='col-md-3'>
                    <img className='rounded' alt='poster' width='250' height='300' src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}/>
                </div>
                <div className='col p-1 m-1'>
                    <h2>{item.title}</h2>
                    <p>{item.overview}</p>
                    <h4>Rating: {item.vote_average}</h4>
                    <h4>Release-Date: {item.release_date}</h4>
                    {
                        (this.state.alert)?
                        <ToastContainer autoClose={2000}/>
                        // ?<h5>{this.state.alert}</h5>    
                        :null
                    }                      
                </div>
                <div style={{cursor:'pointer'}} onClick={() => this.alert(item)} className='mt-2 p-2 btn btn-danger btn-block '>Add to WatchList</div>      
            </div>
        );
    }
}


export default ResultMovieCard;