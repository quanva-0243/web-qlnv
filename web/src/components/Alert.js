import { message } from 'antd';

function Redirect (msg='Redirecting...') {
  message.loading(msg); // Dismiss manually and asynchronously
  setTimeout(()=>{
    window.location.reload();
  }, 2500);
};

function Error (msg='Something error') {
    message.error(msg);
}

function Success (msg='Successfull'){
    message.success(msg);
}

export { Redirect, Error, Success }