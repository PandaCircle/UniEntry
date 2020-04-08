import React, { Component, Fragment } from 'react'
import { Checkbox, DatePicker, Calendar, Typography, Form, Button } from 'antd'
import OrderCalendar from '../orders/OrderCalendar'
import MultiDatePicker from '../orders/MultiDatePicker'
import IMultiDatePicker from '../orders/IMultiDatePicker'

const {Title} = Typography

export default class SupplyOrder extends Component {

    area =[{label:'文华路',value:'A0001'},{label:'新城路',value:'A0002'}]

    dateCellRender = (value) =>{
        console.log(value)
        return (
        <div style={{height:'90px',width:'auto',backgroundColor:'grey'}}>{value.date()}</div>
        )
    }

    handleFinish =(values)=>{
        console.log(values)
    }

    render() {
        return (
            <Form
            onFinish={this.handleFinish}
            initialValues={{
                multidates:[]
            }}
            >
                <Title level={3}>食堂选择</Title>
                <p style={{paddingLeft:'150px'}}>我是个占位符</p>
                <Title level={3}>时间选择</Title>
                <Form.Item
                name={'multidates'}
                style={{paddingLeft:'150px'}}
                >
                    <IMultiDatePicker/>
                </Form.Item>
                <Form.Item
                style={{paddingLeft:'150px'}}
                >
                    <Button type='primary' htmlType='submit'>sumbit</Button>
                </Form.Item>
            </Form>       
        )
    }
}
