import React, { Component } from 'react'
import { config } from '../../config/config'
import MovieSearch from './MovieSearch'
import { withRouter, Link } from 'react-router-dom'
import Modal from 'react-responsive-modal'
import WatchListCard from './WatchListCard';

var headerStyle = {
  fontFamily: 'Berkshire Swash, cursive',
  fontSize: '5em',
}
var textStyles = {
  fontFamily:'Berkshire Swash, cursive'
}

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alert:'',
      isSignedIn:false,
      input: '',
      searchResults: [],
      showModal: false,
      watchList: [],
    }
  }

  componentDidMount() {
    let id = sessionStorage.getItem('session_id')
    let user = sessionStorage.getItem('user')
    if (id && user) {
      this.setState({ isSignedIn:true },() => {
        this.getWatchList()
      })
    }
  }

  onSearchChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onSubmitSearch = () => {
    const query = this.state.input
    const { baseUrl, apiKey } = config()
    fetch(`${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`)
      .then(response => response.json())
      .then(data => this.setState({ searchResults: data.results }))
  }

  toggleModal = () => {
    this.setState({ showModal: true })
  }

  getWatchList = () => {
    let sess_id = sessionStorage.getItem('session_id')
    let { getWatchlistUrl } = config();
    fetch(getWatchlistUrl + sess_id)
      .then(data => (data.json()))
      .then(data => {
        this.setState({watchList:data.results})
        });
    }
  
  renderMovieList= () => {
    let movieObj = []
    const {watchList} = this.state
    watchList.map(movie => {
      return movieObj.push(<WatchListCard key={movie.id} item={movie}/>)
    })
    return movieObj;
  }
  
  signout = () => {
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('session_id')
    this.setState({alert:'You have succesfully Logged out'},() => { 
      setTimeout(() =>{this.props.history.push('/')},2000 )
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to='/' style={{ cursor: 'pointer' }} className="navbar-brand">Home</Link>
          <div className='mx-auto'>
            <div onClick={this.signout} className='btn btn-warning text-dark m-1 p-2'>{(this.state.isSignedIn) ? 'Sign Out' : 'Sign In'}</div>
          </div>
        </nav>
        {
          (this.state.isSignedIn)
            ? <div>
              <h1 style={headerStyle} className='text-center m-1 p-2'>Welcome to ur profile !!</h1>
              <MovieSearch onSearchChange={this.onSearchChange} onSubmitSearch={this.onSubmitSearch} searchResults={this.state.searchResults} toggleModal={this.toggleModal} />
              {
                (this.state.alert)
                ?<h1>
                  {this.state.alert}
                </h1>
                :null
              }
              <Modal
                styles={{fontFamily:'Berkshire Swash, cursive'}}
                open={this.state.showModal}
                onClose={() => this.setState({ showModal: false })}
                center
              >
              <h1 style={textStyles} className='text-center btn-danger w-50'>WatchList</h1>
                {
                  (this.state.watchList.length !== 0)
                    ?
                    this.renderMovieList()
                    :
                    <div className='border-dark '>
                      <h3 style={textStyles}>Currently No movies in your watchlist</h3>
                    </div>
                }

              </Modal>
            </div>
            :
            // should display error screen
            <div>
              <h1>U need to log in</h1>
            </div>
        }
      </div>
    )
  }
}

export default withRouter(Profile);
