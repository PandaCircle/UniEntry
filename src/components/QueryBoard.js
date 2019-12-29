import React, { Component } from 'react'
import QueryBoardView from './QueryBoardView'
import {withRouter} from 'react-router-dom'

class QueryBoard extends Component {

    queryData = ()=>{
        const {location} = this.props
        //解析location
        console.log(location)
    }

    render() {
        return (
            <div>
                <QueryBoardView />
            </div>
        )
    }
}

const queryBoard = withRouter(QueryBoard)

export default queryBoard