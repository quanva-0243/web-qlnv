import { Navigate, Outlet } from 'react-router-dom';
import { findUserByToken } from './axios';
import { AppContext } from "../context/appContext";
import { useContext } from 'react';


function TokenAvailble () {
    // Check token in local storage
    const token = localStorage.getItem("token");
    if(token === null){
        return <Outlet/>;
    }
    // Find token in database
    // Login as user has this token
    return <Navigate to="/home-page"/>
}


function TokenUnavailble () {
    const token = localStorage.getItem("token");
    if(token === null){
        return <Navigate to="/"/>
    }
    // if(token !== user.token){
    //     return <Navigate to="/login"/>
    // }
    return <Outlet/>
}

export { TokenAvailble, TokenUnavailble }