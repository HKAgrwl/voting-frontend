import React from 'react'
import { useState,useContext } from 'react'

const initialState={
    name:'',
    email:'',
    password:'',
}

const AppContext = React.createContext()

const AppProvider = ({children})=>{

    const addUserToLocalStorage = ({user}) => {
        localStorage.setItem('user',JSON.stringify(user))
    }

    const registerUser= async(currentUser)=>{
        try{
            addUserToLocalStorage({currentUser})
        }catch(err){
            console.log(err);
            alert("SOmething Went Wrong");
        }
    }

    return <AppContext.Provider>
        {children}
    </AppContext.Provider>
}
