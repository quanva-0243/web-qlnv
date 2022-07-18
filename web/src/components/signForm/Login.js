import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { LoginCallApi } from '../../api/axios';
import { useNavigate } from 'react-router-dom';

export function Login () {

    const navigate = useNavigate();
    
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = async (values) => {
        console.log('Finish:', values);
        const response = await LoginCallApi(values);
        if(response === true){
            navigate('/home-page');
        }
    };

    return (
        <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
        <Form.Item
            name="email"
            rules={[
                {
                    required: true,
                    message: 'Please input your email!',
                },
            ]}
            >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
                Log in
                </Button>
            )}
        </Form.Item>
        </Form>
    );
}