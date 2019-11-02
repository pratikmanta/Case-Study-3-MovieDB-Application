import React, { Component } from 'react'
// import { getJwt } from '../../config/config'

import { withRouter} from 'react-router-dom'


class AuthComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            user:undefined,
        }
    }

    componentDidMount() {
        // const jwt = getJwt()
        // if(!jwt){
        //     this.props.history.push('/signin')
        // }
        
        // fetch('http://localhost:3050/profile',{
        //     method:'GET',
        //     headers:{'Authorization': `Bearer ${jwt}`}
        // })
        // .then(response => response.json())
        // .then((user) => {
        //     this.setState({user:user})
        // }) 
    }
    
    render() {
        if(this.state.user === undefined){
            return(
            <div><h1>Loading...</h1></div>)
        }       
        return (
        <div>
            {this.props.children}
        </div>
        )
    }
}

export default withRouter(AuthComponent);