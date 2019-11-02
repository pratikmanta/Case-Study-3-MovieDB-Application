import  React , { Component } from 'react'
import './App.css'
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import Profile from './components/Profile/Profile';
import Token from './components/Token/Token'

class App extends Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/signin' render={() => <SignIn loadUser={this.loadUser}/>}/>
          <Route path='/success' component={Token} />
          <Route path='/profile' exact render={() => <Profile/>}/>
        </Switch>
      </Router>
    )
  }
}

export default App;