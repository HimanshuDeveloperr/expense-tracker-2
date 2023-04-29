import React, { useState } from 'react'



const TokenContext=React.createContext({
    token:"",
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
})

export const TokenContextProvider=(props)=>{

    const initialToken=localStorage.getItem("token")
    const [token,setToken]=useState(initialToken)

    const userIsLoggedIn=!!token;

    const  loginHandler=(token)=>{
        setToken(token)
        localStorage.setItem("token",token)
    }

    const logoutHandler=()=>{
        setToken(null)
        localStorage.removeItem("token")
    }

    const value={
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
        
    }

    return <TokenContext.Provider value={value}>{props.children}</TokenContext.Provider>
}

export default TokenContext;