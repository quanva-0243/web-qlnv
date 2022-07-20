import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import React, { useState, useContext } from 'react';
import { AppContext } from "../../context/appContext";
import { RegisterCallApi } from '../../api/axios';

export function Register () {

    const [form, setForm] = useState({
        email: "",
        name: "",
        password: ""
    });

    const { signForm, setCurForm } = useContext(AppContext);

    const { Link } = Typography;

    const handleRegister = () => {
        RegisterCallApi(form);
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
                name='name'
                rules={[
                    { required: true, message: 'Please input your name' }
                ]}
            >
                <Input prefix={<UserOutlined />} placeholder='Username' onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </Form.Item>

            <Form.Item
                name='password'
                rules={[{ required: true, message: 'Please input your password' }]}
            >
                <Input.Password prefix={<LockOutlined />} placeholder='Password' onChange={(e) => setForm({ ...form, password: e.target.value })} />
            </Form.Item>
            <Form.Item>
                <Button className='btn' type='primary' onClick={handleRegister}>
                    Register
                </Button>
            </Form.Item>

            {'Already has account? '}
            <Link onClick={()=>{setCurForm(signForm.login)}}>Login now!</Link>

        </Form>
    );
}