import React, { Component } from 'react'
import LoginUi from './loginUi';
import axios from 'axios'

export default class Login extends Component {

    constructor(props){
        super(props)
        this.state={
            username:"",
            password:""
        }
        this.usernameChange = this.usernameChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    usernameChange(event){
        this.setState({username:event.target.value})
    }

    passwordChange(event){
        this.setState({password:event.target.value})
    }

    handleSubmit(event){
        axios.post('http://localhost:8080/Login',
            {
                username:this.state.username,
                password:this.state.password
            }
        )
        .then(function(response){
            alert(response.data)
        })
        .catch(function(error){
            alert(error)
        })
    }

    render() {
        return (
            <div>
                <LoginUi usernameChange={this.usernameChange} passwordChange={this.passwordChange} handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
