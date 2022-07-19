import axios from 'axios';
import { Redirect, Error } from '../components/Alert';

const defaultApi = 'http://127.0.0.1:8000/api';


export const LoginCallApi = async (form) => {
    try{
        const response = await axios.post(`${defaultApi}/user/login`, form );
        console.log(response);
        if(response.status===200){
            localStorage.setItem('token', response.data.token);
            Redirect();
            return true;
        }else{
            Error(response.data.message);
        }
    }
    catch(err){
        console.log(err);
    }
}

export const RegisterCallApi = async (form) => {
    try{
        const response = await axios.post(`${defaultApi}/user/register`, form );
        console.log(response.data);
        if(response.status===200){
            return true;
        }
    }
    catch(err){
        console.log(err);
    }
}

export const findUserByToken = async (token) => {
    const userInfo = await axios.get(`${defaultApi}/user/info`, {token});
    if(userInfo){
        return userInfo;
    }else{
        return null;
    }
}
