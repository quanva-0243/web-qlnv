import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import React, { useState, useContext } from 'react';
import { AppContext } from "../../context/appContext";
import { LoginCallApi } from '../../api/axios';

export function Login () {

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const { signForm, setCurForm } = useContext(AppContext);

    const { Link } = Typography;

    const handleLogin = async () => {
        LoginCallApi(form);
    }

    return (
        <Form
            name='loginForm'
            className='form'
        >
            <Form.Item
                name='email'
                rules={[
                    { required: true, type: 'email', message: 'Please input your email' }
                ]}
            >
                <Input prefix={<UserOutlined />} placeholder='Email' onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </Form.Item>

            <Form.Item
                name='password'
                rules={[{ required: true, message: 'Please input your password' }]}
            >
                <Input.Password prefix={<LockOutlined />} placeholder='Password' onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <Form.Item>

            </Form.Item>
                <Button className='btn' type='primary' onClick={handleLogin}>
                    Log In
                </Button>
            </Form.Item>
            <Link onClick={()=>{setCurForm(signForm.register)}}>Register now!</Link>

        </Form>
    );
}