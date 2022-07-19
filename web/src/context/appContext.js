import { useState, createContext } from "react";
import { Login } from "../components/signForm/Login";
import { Register } from "../components/signForm/Register";

export const AppContext = createContext();

export function AppContextProvider ({children}) {
    
    const signForm = {
        login : <Login/>,
        register : <Register/>,
    }

    const [curForm, setCurForm] = useState(signForm.login);

    const user = {}

    //  Global variables
    const data = {
        signForm,
        curForm,
        setCurForm,
        user
    }

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
}