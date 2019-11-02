import React, { Component } from 'react'
import MovieList from './MovieList'
import { config } from '../../config/config'
import Navigation from '../Navigation/Navigation'
import "react-responsive-carousel/lib/styles/carousel.min.css";



class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      movieData: [],
      movies:undefined
    }
  }

  componentDidMount() {
    const { baseUrl, apiKey } = config()
    let url = "".concat(baseUrl, '/movie/popular?api_key=', apiKey)
    let nowPlayingUrl = "".concat(baseUrl, '/movie/now_playing?api_key=', apiKey)
    fetch(url).then(response => response.json())
      .then(movieData => this.setState({ movieData: movieData.results }))

    fetch(nowPlayingUrl).then(response => response.json())
      .then(data => this.setState({movies:data.results}))
      .catch(error => console.log('error occured'))
  }

  renderCarousel = (movieArray) => {
    if(movieArray !== undefined){
      for(var i=0; i<=10; i++){
        return (
          <div className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={`https://image.tmdb.org/t/p/original/${movieArray[i+3].poster_path}`}  alt='slide1' height='600px'/>   
              </div>
              <div className="carousel-item">
                  <img src={`https://image.tmdb.org/t/p/original/${movieArray[i+5].poster_path}`} alt='slide2' height='600px'/>   
              </div>
              <div className="carousel-item">
                <img src={`https://image.tmdb.org/t/p/original/${movieArray[i+6].poster_path}`} alt='slide3' height='600px'/>
              </div>
              <div className="carousel-item">
                <img src={`https://image.tmdb.org/t/p/original/${movieArray[i+9].poster_path}`} alt='slide4' height='600px'/>
              </div>
            </div>
          </div>
        )
      }  
    } 
  }
  render() {
    const {movies} = this.state
    var { registerUrl } = config()
    return (
      <div>
        <Navigation />
        <div style={{fontFamily:'Berkshire Swash, cursive'}} className="jumbotron w-50 float-left">
          <h1 className="display-1">Welcome to MovieDB </h1>
          <p className="lead">You must have an acount at <em style={{fontSize:'1.5rem'}}>TMDB</em> to be able to login.</p>
          <div className='mt-2'>
            <p><a className="btn btn-block text-center btn-lg btn-success" href={registerUrl} role="button">Sign up today</a></p>
          </div>
          <div className='btn-block btn-lg btn-danger text-center'>
            <h3 className='p-2 mt-2'>Now Playing</h3>
          </div>
        </div>
          <div className='d-flex justify-content-around'>
            {
              this.renderCarousel(movies)
            }
          </div>
          <MovieList className='mt-4' movieData={this.state.movieData} />  
      </div>
    )
  }
}

export default Home;