import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React from 'react';

const axios = require('axios');

class NormalLoginForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    var me = this;
    me.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        var params = JSON.stringify(values).replace(/"/g,'').replace(/{/g,'').replace(/}/g,'').replace(/:/g,'=').replace(/,/g,"&")
        axios(
          {
            method:'post',
            url:"http://localhost:8080/login",
            data:params,
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            withCredentials:true
          }
        )
        .then(function(res){
          console.log(res.data)
          debugger;
          if(res.data.meta.success === true){
             me.props.history.push('/')
          }
          else{
            console.log('login failed')
          }
        })
        .catch(function(err){
          console.log(err)
        })
        console.log('hello')
      }
    });
  };


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" action="http://localhost:8080/login">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('rememberMe', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export {WrappedNormalLoginForm};