import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import { WrappedNormalLoginForm } from './NormalLoginForm'
import HomePage from './HomePage'
import {createBrowserHistory} from 'history'

export default function DefaultRouter() {

    const history = createBrowserHistory()
    return (
        <Router history = {history}>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/login' component={WrappedNormalLoginForm}/>
            </Switch>
        </Router>
    )
}


