import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';

export const Sign = () => {

    const [signForm, setSignForm] = useState('Sign in');

    const changeForm = (tag) => {
        setSignForm(tag);
    }
    
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = (values) => {
        console.log('Finish:', values);
    };

    if(signForm === 'Sign in')
    return (
        <div>
            <div>
                <Button style={{backgroundColor:'#cce7ff'}} >Sign in</Button>
                <Button onClick={ (e) => changeForm(e.target.innerHTML)}>Sign up</Button>
            </div>
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
                >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Please input your password!',
                },
            ]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>
            <Form.Item shouldUpdate>
                {() => (
                    <Button
                    onClick={()=>{console.log(form)}}
                    type="primary"
                    htmlType="submit"
                    disabled={
                        !form.isFieldsTouched(true) ||
                        !!form.getFieldsError().filter(({ errors }) => errors.length).length
                    }
                    >
                    Log in
                </Button>
                )}
            </Form.Item>
            </Form>
        </div>
    );
    else if(signForm === 'Sign up')
    return (
        <div>
            <div>
                <Button onClick={ (e) => changeForm(e.target.innerHTML)}>Sign in</Button>
                <Button style={{backgroundColor:'#cce7ff'}} >Sign up</Button>
            </div>
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
                >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Please input your password!',
                },
            ]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>
            <Form.Item shouldUpdate>
                {() => (
                    <Button
                    onClick={()=>{console.log(form)}}
                    type="primary"
                    htmlType="submit"
                    disabled={
                        !form.isFieldsTouched(true) ||
                        !!form.getFieldsError().filter(({ errors }) => errors.length).length
                    }
                    >
                    Log in
                </Button>
                )}
            </Form.Item>
            </Form>
        </div>
    );
}