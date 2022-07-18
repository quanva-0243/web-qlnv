import axios from 'axios';

const defaultApi = 'http://127.0.0.1:8000/api';

async function LoginCallApi (form) {
    console.log(form);
    try{
        const response = await axios.post(`${defaultApi}/user/login`, form );
        if(response.status===200){
            return true;
        }else{
            return false;
        }
    }
    catch(err){
        console.log(err);
    }
}

async function RegisterCallApi (form) {
    console.log(form);
    try{
        const response = await axios.post(`${defaultApi}/user/register`, form );
        console.log(response.data);
        if(response.status===200){
            return true;
        }else{
            return false;
        }
    }
    catch(err){
        console.log(err);
    }
}


export { LoginCallApi, RegisterCallApi }