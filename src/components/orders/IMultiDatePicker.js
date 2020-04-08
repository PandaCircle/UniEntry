import React, { Component, useState } from 'react'
import { Row, Col, Calendar, Button, Select, Typography } from 'antd'
import moment from 'moment'
import './Calendar.css'

const {Option} = Select
const {Title} = Typography

const isSameMonth =(date1,date2)=>{
    return (
        date1===date2||
        (date1&&
            date2&&
            date1.year()===date2.year()&&
            date1.month()===date2.month()
            )
    )
}

export default function IMultiDatePicker({value=[],onChange}) {

    //=============State================

    // Value
    const [currentMoment,setCurrentMoment] = useState(moment().locale('zh'))
    const [selectedDate,setSelectedDate] = useState(value||[])


    // Disable Date
    const setExpandDateDisabled = (date)=>{
        return !isSameMonth(date,currentMoment)
    }

    //=============Events================
    const handleDateSelect = (moment)=>{

        var newSelectedDate = selectedDate

        var index = newSelectedDate.findIndex(e=>e===moment.format('YYYY-MM-DD'))
        if(index >-1){
            newSelectedDate = newSelectedDate.filter(e=>e!==moment.format('YYYY-MM-DD'))
        }
        else{
            newSelectedDate.push(moment.format('YYYY-MM-DD'))
        }
        
        setSelectedDate(newSelectedDate)

        // for from controlled callback
        if(onChange){
            onChange(newSelectedDate)
        }

    }

    const handleMomentChange = (value)=>{
        setCurrentMoment(value)
    }

    //============Renders===============
    
    const dateCellRender =(moment)=>{

        var isChoose = selectedDate.findIndex(e=>e===moment.format('YYYY-MM-DD'))>-1

        return(
            <div className={'cell-wrapper'}>
                <div className={isChoose?'cell-block-selected':'cell-block'}>
                    <p>{moment.date()}</p>
                </div>
            </div>   
        )
    }

    const dayPickerHeader =({value,type,onChange,onTypeChange})=>{
        return (
            <div></div>
        )
    }

    const monthPickerHeader = ({value,type,onChange,onTypeChange})=>{

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
                    style={{width:'80px'}}
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


    return (
        <div className={'picker-wrapper'}>
                <div className={'picker-pick-month'}>
                    <Calendar 
                    mode='year'
                    fullscreen={false}
                    headerRender={monthPickerHeader}
                    value={currentMoment}
                    onChange={e=>handleMomentChange(e)}
                    />
                </div>
                <div className={'picker-pick-date'}>
                    <Calendar
                    mode='month'
                    value={currentMoment}
                    headerRender={dayPickerHeader}
                    onSelect={moment=>handleDateSelect(moment)}
                    dateFullCellRender = {dateCellRender}
                    disabledDate={setExpandDateDisabled}
                    style={{display:'inline'}}
                    />
                </div>
            </div>
    )
}