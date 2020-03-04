import React, { Component } from 'react'
import { PageHeader, Button, Input, Form, Divider } from 'antd'

export default class ProductView extends Component {
    render() {
        return (
            <div>
                <PageHeader 
                title={'Product LinJet'}
                onBack={()=>null}
                extra={[
                    <Button danger>删除</Button>,
                    <Button>完成</Button>
                ]}
                >
                    <Divider/>
                    <Form
                    layout='horizontal'
                    >
                        <Form.Item
                        label='产品名称'
                        name='product_name'
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item 
                        label='产品描述'
                        name='despcrition'
                        >
                            <Input/>
                        </Form.Item>
                    </Form>
                </PageHeader>
            </div>
        )
    }
}
