import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'


export default class HomePage extends Component {

    getUser = ()=>{
        return this.getCookie("username")
    }


    getCookie = (name)=>{

        var cookies = document.cookie.split(";")

        if(cookies.length > 0)
        {
            for(var i=0; i< cookies.length; i++){
                var pos = cookies[i].indexOf(name)
                //找到字符串
                if(pos > -1){
                    return cookies[i].split("=")[1]
                }
            }
        }
        
        return ""
    }

    render() {
        if(this.getUser()==""){
            return <Redirect to='/login'/>
        }
        else{
        return (
            <div>
                <p>当前用户：{this.getUser()} </p>
            </div>
        )
        }
    }


    

}
