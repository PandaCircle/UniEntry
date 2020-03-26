import React, { Component, Fragment } from 'react'
import { Checkbox, DatePicker, Calendar } from 'antd'
import OrderCalendar from '../orders/OrderCalendar'

export default class SupplyOrder extends Component {

    area =[{label:'文华路',value:'A0001'},{label:'新城路',value:'A0002'}]

    dateCellRender = (value) =>{
        console.log(value)
        return (
        <div style={{height:'90px',width:'auto',backgroundColor:'grey'}}>{value.date()}</div>
        )
    }

    render() {
        return (
            <Fragment>
                <Checkbox.Group options={this.area} />
                <DatePicker picker='month' onChange={()=>null}/>
                {/* <Calendar 
                headerRender={()=>null}
                dateFullCellRender={this.dateCellRender}
                /> */}
                <OrderCalendar />
            </Fragment>         
        )
    }
}
