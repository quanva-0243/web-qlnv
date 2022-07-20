import axios from 'axios';
import { Error, Success, Redirect } from '../components/Alert';

//  Config
const baseURL = 'http://127.0.0.1:8000/api';
(()=>{
    const token = localStorage.getItem('token');
    if(token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    else
        delete axios.defaults.headers.common['Authorization'];
})();
//

export const LoginCallApi = async (form) => {
    try{
        const response = await axios.post(`${baseURL}/user/login`, form );
        if(response.status===200){
            if(response.data.success === true){
                localStorage.setItem('token', response.data.token);
                
                Redirect();
            }else{
                Error(response.data.message);
            }
        }
    }
    catch(error){
        Error(error.message);
    }
}

export const RegisterCallApi = async (form) => {
    try{
        const response = await axios.post(`${baseURL}/user/register`, form );
        if(response.status===200){
            if(response.data.success){
                window.location.reload();
                Success(response.data.message);
            }
            else
                Error(response.data.message);
        }
    }
    catch(error){
        Error(error.message);
    }
}

export const LogoutCallApi = async () => {
    try{
        const response = await axios.get(`${baseURL}/user/logout`);
        if(response.status===200)
        if(response.data.success){
            localStorage.removeItem('token');
            delete axios.defaults.headers.common['Authorization'];
            window.location.reload();
        }
    }
    catch(error){
        Error(error);
    }
}

export const GetUser = async () => {
    try{
        const response = await axios.get(`${baseURL}/user/info`);
        if(response.data.success === true)
            return response.data;
    }catch(error){
        return error.message
    }
}