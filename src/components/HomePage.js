import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { Layout, Menu } from 'antd'

const {Header,Content,Footer} = Layout

export default class HomePage extends Component {

    render() {
        return(
            <Layout className='layout'>
                <Header>
                    <div className='logo'/>
                    <Menu
                        defaultSelectedKeys={['2']}
                        mode='horizontal'
                        theme='dark'
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key='1' style={{fontSize:20,fontWeight:'bold'}}>去订餐</Menu.Item>
                        <Menu.Item key='2' style={{fontSize:20,fontWeight:'bold'}}>订餐管理</Menu.Item>
                        <Menu.Item key='3' style={{fontSize:20,fontWeight:'bold'}}>设置</Menu.Item>
                    </Menu>
                </Header>
                <Content>
                    <div style={{height:'100%'}}>hello</div>
                </Content>
                <Footer>
                    信息中心 ©2018 
                </Footer>
            </Layout>
        )
    }


    

}
