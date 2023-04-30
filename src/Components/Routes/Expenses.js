import React, { useRef, useState } from 'react'
import './Expenses.css'
import ExpensesList from './ExpensesList';

// const expenses = [
//   {
//     id: 'e1',
//     title: 'Groceries',
//     amount: 124.56,
//     date: new Date(2022, 3, 20)
//   },
//   {
//     id: 'e2',
//     title: 'Gasoline',
//     amount: 50.00,
//     date: new Date(2022, 3, 23)
//   },
//   {
//     id: 'e3',
//     title: 'Movie tickets',
//     amount: 35.00,
//     date: new Date(2022, 4, 2)
//   }
// ];


const Expenses = () => {

  const [expenses,setExpenses]=useState([])
  const moneyref=useRef()
  const categoryref=useRef()
  const descriptionref=useRef()

  const submitHandler=(e)=>{
    e.preventDefault()

      const details={
        id:Math.random(),
        description:descriptionref.current.value,
        category:categoryref.current.value,
        money:moneyref.current.value
      }

      setExpenses((prevdetails)=>{
        return [...prevdetails,details]
      })

  }
  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <label htmlFor="money">Money Spent:</label>
        <input type="text" id="money" name="money" ref={moneyref} />

        <label htmlFor="description">Expense Description:</label>
        <input type="text" id="description" name="description" ref={descriptionref} />

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
        <ExpensesList expenses={expenses}/>
      </div>
    </div>
  )
}

export default Expenses
