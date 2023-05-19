import { createSlice } from "@reduxjs/toolkit"; 


const initialState={
    isLogin :false,
    idToken :localStorage.getItem('idToken')
}

const AuthSlice=createSlice(
    {
        name:'auth',
        initialState:initialState,
        reducers:{
            login (state,action) {
                localStorage.setItem("token",action.payload)
                state.isLogin=true;
                state.idToken=action.payload;
            },
            logout (state) {
                localStorage.removeItem('token')
                localStorage.removeItem('email')
                state.isLogin=false;
                state.idToken=null;
            }
        }
    }
)

export default AuthSlice;
export const AuthActions=AuthSlice.actions;