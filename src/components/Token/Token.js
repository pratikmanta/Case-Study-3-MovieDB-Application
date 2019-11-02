import React, {Component} from 'react'
import { config } from '../../config/config'


class Token extends Component {
    constructor(props){
        super(props)
        this.state = {
            token:''
        }
    }

    componentDidMount(){
        let token = this.props.location.search
        token = token.replace('?request_token=','').replace('&approved=true','');
        this.setState({token:token}, () => {
            this.onLoginSuccess()
        })
    }

    onLoginSuccess = () => {
        const { sessionUrl, profileUrl } = config()
        fetch(sessionUrl+this.state.token)
        .then(response => response.json())
        .then(data => sessionStorage.setItem('session_id',data.session_id))
        .then(() => {
            window.location.href = profileUrl
        })
        .catch(error => console.log('error'))
    }

    render(){
        return(
            <div>
                <h2>Loading....</h2>
            </div>
        )
    }
}

export default Token;