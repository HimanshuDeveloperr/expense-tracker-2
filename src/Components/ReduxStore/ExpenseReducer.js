import {createSlice} from '@reduxjs/toolkit';

const initialState={
    Expenses:[],
    total:0
}

const ExpenseSlice= createSlice({
    name:'expense',
    initialState:initialState,
    reducers:{

        setExpenses (state,action) {
            state.Expenses=action.payload
        }
    }
})


export const ExpenseActions=ExpenseSlice.actions;
export default ExpenseSlice;