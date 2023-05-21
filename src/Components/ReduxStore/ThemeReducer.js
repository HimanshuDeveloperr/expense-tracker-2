import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isDarkTheme:false,
    premium:false
}

const ThemeSlice=createSlice({
    name:'theme',
    initialState:initialState,
    reducers:{
        toggleTheme (state) {
           state.isDarkTheme=!state.isDarkTheme
           state.premium=!state.premium
        },

        toggle(state){
           state.isDarkTheme=!state.isDarkTheme
        }
    }
})

export const ThemeActions=ThemeSlice.actions
export default ThemeSlice