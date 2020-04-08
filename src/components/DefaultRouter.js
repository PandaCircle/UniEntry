import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import ProductView from './products/ProductView'
import HomePage from './HomePage'
import SupplyOrder from './products/SupplyOrder'
import MultiDatePicker from './orders/MultiDatePicker'
import IMultiDatePicker from './orders/IMultiDatePicker'

export default function DefaultRouter() {

    const history = createBrowserHistory()
    return (
        <Router history = {history}>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/login' component={SupplyOrder}/>
            </Switch>
        </Router>
    )
}


