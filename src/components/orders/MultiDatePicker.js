import React, { Component, useState } from 'react'
import { Row, Col, Calendar, Button, Select } from 'antd'
import moment from 'moment'

const {Option} = Select


export default class MultiDatePicker extends Component {

    constructor(props){
        super(props)
        //get current time
        var currentMoment = moment().locale('zh')
        //initial state
        this.state={
            //indicate chosen date in year or month view
            currentMoment:currentMoment,
            selectedMoment:{}
        }
    }

    handleMomentChange = (value)=>{
        this.setState({...this.state,currentMoment:value})
    }

    dayPickerHeader =({value,type,onChange,onTypeChange})=>{
        return (
            <div>{value.month()}</div>
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
            <div>
                <Calendar 
                mode='year'
                fullscreen={false}
                headerRender={this.monthPickerHeader}
                value={this.state.currentMoment}
                onChange={e=>this.handleMomentChange(e)}
                />
                <Calendar
                mode='month'
                value={this.state.currentMoment}
                headerRender={this.dayPickerHeader}
                onSelect={moment=>this.handleMomentChange(moment)}
                />
            </div>
        )
    }
}
