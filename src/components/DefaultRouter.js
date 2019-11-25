import React from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import { WrappedNormalLoginForm } from './NormalLoginForm'
import HomePage from './HomePage'

export default function DefaultRouter() {
    return (
        <Router>
            <Route exact path='/' component={HomePage}/>
            <Route path='/login' component={WrappedNormalLoginForm}/>
        </Router>
    )
}


