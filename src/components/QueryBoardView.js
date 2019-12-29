import React, { Component } from 'react'
import Search from 'antd/lib/input/Search'
import { Button, Breadcrumb, List } from 'antd'
import {Link} from 'react-router-dom'
import {generateViewPath} from '../common/common'

export default class QueryBoardView extends Component {

    //dataSource {content,contentType,others}
    render() {
        const {dataSource,dataType,dataPath} = this.props
        return (
            <div>
                <Breadcrumb>
                    {dataPath.forEach(element => 
                        (<Breadcrumb.Item>element</Breadcrumb.Item>)
                    )}
                </Breadcrumb>
                <Search placeholder='输入关键字' />
                <Button type='primary'>新增</Button>
                <List
                    bordered
                    dataSource={dataSource}
                    renderItem={item=>(
                        <List.Item>
                            <Link to={generateViewPath(dataType)}>{item.content} </Link>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
