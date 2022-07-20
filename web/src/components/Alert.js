import { message } from 'antd';

function Redirect (msg='Redirecting...') {
    const hide = message.loading(msg, 0); // Dismiss manually and asynchronously
    setTimeout(()=>{
      hide();
      window.location.reload();
    }, 2000);
};

function Error (msg='Something error') {
    message.error(msg, 0);
}

function Success (msg='Successfull'){
    message.success(msg, 0);
}

export { Redirect, Error, Success }