import React, { useEffect, useRef} from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ExpenseActions } from "../ReduxStore/ExpenseReducer";

const Expenses = () => {
  const moneyref = useRef();
  const categoryref = useRef();
  const descriptionref = useRef();
  const dispatch=useDispatch()

  const expenses=useSelector(state=>state.expense.Expenses)
  const total=useSelector(state=>state.expense.total)

  const saveHandler=(newexpense)=>{

    axios.put(`https://expense-tracker-2-eed66-default-rtdb.firebaseio.com/expenses/${newexpense.id}.json`,newexpense)
    .then(
      (res)=>{
        const updatedExpenses = expenses.map((expense) =>
          expense.id === newexpense.id ? newexpense : expense
        );
    dispatch(ExpenseActions.setExpenses(updatedExpenses))

        
      }
    ).catch((err)=>{
      console.log(err)
    })
  }

const deleteHandler=(id)=>{
  axios.delete(`https://expense-tracker-2-eed66-default-rtdb.firebaseio.com/expenses/${id}.json`).then((res)=>{
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    dispatch(ExpenseActions.setExpenses(updatedExpenses))

  })
}

  useEffect(() => {
    axios
      .get(`https://expense-tracker-2-eed66-default-rtdb.firebaseio.com/expenses.json`)
      .then((res) => {
        const loadedExpenses = [];
        for (const key in res.data) {
          loadedExpenses.push({ id: key, ...res.data[key] });
        }
       dispatch(ExpenseActions.setExpenses(loadedExpenses))
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();

    const details = {
      // id:Math.random(),
      description: descriptionref.current.value,
      category: categoryref.current.value,
      money: moneyref.current.value,
    };

    axios
      .post(
        `https://expense-tracker-2-eed66-default-rtdb.firebaseio.com/expenses.json`,
        details
      )
      .then((res) => {
        const newExpense = { id: res.data.name, ...details };
        const updatedExpenses = [...expenses, newExpense];
        dispatch(ExpenseActions.setExpenses(updatedExpenses))

      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <label htmlFor="money">Money Spent:</label>
        <input type="text" id="money" name="money" ref={moneyref} />

        <label htmlFor="description">Expense Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          ref={descriptionref}
        />

        <label htmlFor="category">Expense Category:</label>
        <select id="category" name="category" ref={categoryref}>
          <option value="food">Food</option>
          <option value="petrol">Petrol</option>
          <option value="salary">Salary</option>
          <option value="other">Other</option>
        </select>

        <input type="submit" value="Submit" />
      </form>
      <div>
        <ExpensesList expenses={expenses} onDelete={deleteHandler} onEdit={saveHandler} />
      </div>
      {total > 10000 && <button className="btn btn-success">Activate Premium</button>}
    </div>
  );
};

export default Expenses;
