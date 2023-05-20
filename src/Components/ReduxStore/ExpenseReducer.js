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
            state.total=calculateTotal(action.payload)
        }
    }
})

const calculateTotal = (expenses) => {
    let total = 0;
    expenses.forEach((expense) => {
      total += parseFloat(expense.money);
    });
    return total;
  };


export const ExpenseActions=ExpenseSlice.actions;
export default ExpenseSlice;