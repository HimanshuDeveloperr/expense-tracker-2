import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./AuthReducer";
import ExpenseSlice from "./ExpenseReducer";



const store= configureStore({
    reducer:{auth:AuthSlice.reducer,expense:ExpenseSlice.reducer}
})

export default store;