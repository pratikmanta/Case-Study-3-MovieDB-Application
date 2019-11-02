import React from 'react' 
import './SignIn.css'
import logo from '../logo.svg'
import Navigation from '../Navigation/Navigation';
import { withRouter} from 'react-router-dom'
import { config } from '../../config/config'

class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            request_token:''
        }
    }

    onSignInUsername = (event) => {
        this.setState({username:event.target.value})
    }

    onSubmitSignIn = (event) => {
        event.preventDefault()
        var token = ''
        sessionStorage.setItem('user',this.state.username)
        const {requestTokenUrl} = config()
        fetch(requestTokenUrl)
        .then(response => response.json())
        .then(data => {
            token = data.request_token
            this.setState({request_token:token},() => {
                let {authenticationUrl,firstRedirect} = config();

                window.location.href = authenticationUrl + this.state.request_token + firstRedirect
            })
        })
        .catch(err => {
            if(err)
            sessionStorage.setItem('user','')
            this.setState({username:''})
        })
    }
        
        render(){
            return (
            <div className="main">
                <Navigation/>
                <div className="box">
                    <div className="middle">
                        <div id="login">
                            <form>
                                <fieldset className="clearfix">
                                    <p ><span className="fa fa-user"></span><input onChange={this.onSignInUsername} type="text" value={this.state.username} name="username" placeholder="Username" /></p> 
                                    <div>
                                        <input onClick={this.onSubmitSignIn} className='button' type="submit" value="Sign In"/>
                                    </div>
                                </fieldset>
                            </form>    
                        </div>
                        <div className="logo ml-2 pl-2">
                            <img src={logo} alt='logo'/>   
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SignIn);