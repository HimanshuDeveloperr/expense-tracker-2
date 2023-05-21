import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./AuthReducer";
import ExpenseSlice from "./ExpenseReducer";
import ThemeSlice from "./ThemeReducer";



const store= configureStore({
    reducer:{auth:AuthSlice.reducer,expense:ExpenseSlice.reducer,theme:ThemeSlice.reducer}
})

export default store;