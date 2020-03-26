import React, { Component, Fragment } from 'react'
import { Calendar } from 'antd'
import './Calendar.css'

export default class OrderCalendar extends Component {
    
    constructor(props){
        super(props)
        var dateArray = new Array(32).fill(false)
        this.state ={
            dates:dateArray
        }
    }

    handleSelect = (date)=>{
        console.log(date.date()+' selected')
        let dates = this.state.dates
        let index = date.date()
        dates[index] = !dates[index]
        this.setState({...this.state,dates:dates})
    }

    cellRender =(value)=>{
        return (
            <div className={this.state.dates[value.date()]?'cell-block-selected':'cell-block'} >
                {value.date()}
            </div>
        )
    }

    render() {
        return (
            <Calendar onSelect={this.handleSelect} dateFullCellRender={this.cellRender} />
        )
    }
}
