import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { RegisterCallApi } from '../../api/axios';
import { useNavigate } from 'react-router-dom';

export function Register () {

    const navigate = useNavigate();
    
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = async (values) => {
        console.log('Finish:', values);
        const response = await RegisterCallApi(values);
        if(response === true){
            navigate('/');
        }else{
            console.log('msg: ' + response);
        }
    };

    return (
        <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
        <Form.Item
            name="name"
            rules={[
                {
                    required: true,
                    message: 'Please input your name!',
                },
            ]}
            >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
            name="email"
            rules={[
                {
                    required: true,
                    message: 'Please input your email!',
                },
            ]}
            >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
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
                type="primary"
                htmlType="submit"
                disabled={
                    !form.isFieldsTouched(true) ||
                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                }
                >
                Register
            </Button>
            )}
        </Form.Item>
        </Form>
    );
}