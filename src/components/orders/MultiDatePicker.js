import React, { Component, useState } from 'react'
import { Row, Col, Calendar, Button, Select, Typography } from 'antd'
import moment from 'moment'
import './Calendar.css'

const {Option} = Select
const {Title} = Typography

export default class MultiDatePicker extends Component {

    constructor(props){
        super(props)
        //get current time
        var currentMoment = moment().locale('zh')
        //initial state
        this.state={
            //indicate chosen date in year or month view
            currentMoment:currentMoment,
            //[{year:2018,date:[Jan,Feb,...,Dec]}]
            selectedDate:[]
        }
    }

    setExpandDateDisabled = (date)=>{
        return !this.isSameMonth(date,this.state.currentMoment)
    }

    isSameMonth =(date1,date2)=>{
        return (
            date1===date2||
            (date1&&
                date2&&
                date1.year()===date2.year()&&
                date1.month()===date2.month()
                )
        )
    }

    handleComfirm = ()=>{
        console.log(this.state.selectedDate)
    }

    dateCellRender =(moment)=>{

        var isChoose = this.state.selectedDate.findIndex(e=>e===moment.format('YYYY-MM-DD'))>-1

        return(
            <div className={'cell-wrapper'}>
                <div className={isChoose?'cell-block-selected':'cell-block'}>
                    <p>{moment.date()}</p>
                </div>
            </div>   
        )
    }

    handleDateSelect = (moment)=>{
        var selectedDate = this.state.selectedDate
        var index = selectedDate.findIndex(e=>e===moment.format('YYYY-MM-DD'))
        if(index >-1){
            selectedDate = selectedDate.filter(e=>e!==moment.format('YYYY-MM-DD'))
            this.setState({...this.state,selectedDate:selectedDate})
        }
        else{
            selectedDate.push(moment.format('YYYY-MM-DD'))
            this.setState({...this.state, selectedDate:selectedDate, currentMoment:moment})
        }

    }

    handleMomentChange = (value)=>{
        this.setState({...this.state,currentMoment:value})
    }

    dayPickerHeader =({value,type,onChange,onTypeChange})=>{
        return (
            <div></div>
        )
    }

    monthPickerHeader = ({value,type,onChange,onTypeChange})=>{

        var selectedYear = value.year()
        var yearSelector = [-2,-1,0,1,2]

        
        let handleSelectChange = (newYear)=>{
            console.log(newYear,selectedYear)
            var now = value.clone().year(newYear)
            onChange(now)
        }

        return(
            <Row>
                <Col span={6}> 
                    <div onClick={()=>handleSelectChange(selectedYear-1)}>前一年</div>
                </Col>
                <Col span={12}>
                    <Select
                    value={selectedYear}
                    onChange={value=>handleSelectChange(value)}
                    >
                        {yearSelector.map(element => (
                        <Option key={element} value={selectedYear+element}>{selectedYear+element}</Option>
                        ))}
                    </Select>
                </Col>
                <Col span={6}>
                    <div onClick={()=>handleSelectChange(selectedYear+1)}>后一年</div>
                </Col>
            </Row>
        )
    }

    render() {
        console.log(this.state.currentMoment)
        return (
            <div className={'picker-wrapper'}>
                <div className={'picker-pick-month'}>
                    <Calendar 
                    mode='year'
                    fullscreen={false}
                    headerRender={this.monthPickerHeader}
                    value={this.state.currentMoment}
                    onChange={e=>this.handleMomentChange(e)}
                    />
                </div>
                <div className={'picker-pick-date'}>
                    <Calendar
                    mode='month'
                    value={this.state.currentMoment}
                    headerRender={this.dayPickerHeader}
                    onSelect={moment=>this.handleDateSelect(moment)}
                    dateFullCellRender = {this.dateCellRender}
                    disabledDate={this.setExpandDateDisabled}
                    style={{display:'inline'}}
                    />
                </div>
            </div>
        )
    }
}
