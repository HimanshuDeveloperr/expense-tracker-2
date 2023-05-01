import React, { useEffect, useRef, useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import axios from "axios";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const moneyref = useRef();
  const categoryref = useRef();
  const descriptionref = useRef();


const deleteHandler=(id)=>{
  axios.delete(`https://expense-tracker-2-eed66-default-rtdb.firebaseio.com/expenses/${id}.json`).then((res)=>{
    setExpenses((prevExpenses)=>{
      return prevExpenses.filter((expense)=>expense.id !== id)
    })
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
        setExpenses(loadedExpenses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        setExpenses((prevdetails) => {
          return [...prevdetails, { id: res.data.name, ...details }];
        });
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
        <ExpensesList expenses={expenses} onDelete={deleteHandler} />
      </div>
    </div>
  );
};

export default Expenses;
