import React from 'react';
import './ExpensesList.css';
import { BsBackspaceReverseFill } from "react-icons/bs";
const ExpensesList = ({ expenses, onDelete}) => {

  const deleteHandler=(expense)=>{
     onDelete(expense.id)
  }
  return (
    <div className="expenses-list">
      <ul className="expenses-list__items">
        {expenses.map(expense => (
          <li key={expense.id} className="expenses-list__item">
            <div className="expenses-list__item-title">{expense.description}</div>
            <div className="expenses-list__item-date">{expense.category}</div>
            <div className="expenses-list__item-amount">${expense.money}</div>
            <div className='mx-3' onClick={() => deleteHandler(expense)}>
              <BsBackspaceReverseFill/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
