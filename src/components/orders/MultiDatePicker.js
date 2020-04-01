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
            currentMoment:currentMoment
        }
    }

    handleMomentChange = (value)=>{
        console.log(value,'change')
        this.setState({...this.state,currentMoment:value})
    }

    customHeader = ({value,type,onChange,onTypeChange})=>{

        var selectedYear = value.clone().year()
        var yearSelector = [-2,-1,0,1,2]

        
        let handleSelectChange = (newYear)=>{
            console.log(newYear)
            var now = value.clone().year(newYear)
            onChange(now)
        }

        return(
            <Row>
                <Col span={6}> 前 </Col>
                <Col span={12}>
                    <Select
                    defaultValue={selectedYear}
                    onChange={value=>handleSelectChange(value)}
                    >
                        {yearSelector.map(element => (
                        <Option key={element} value={selectedYear+element}>{selectedYear+element}</Option>
                        ))}
                    </Select>
                </Col>
                <Col span={6}> 后 </Col>
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
                headerRender={this.customHeader}
                value={this.state.currentMoment}
                onChange={e=>this.handleMomentChange(e)}
                />
            </div>
        )
    }
}
