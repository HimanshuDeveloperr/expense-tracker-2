import React from 'react';
import './ExpensesList.css';

const ExpensesList = ({ expenses }) => {
  return (
    <div className="expenses-list">
      <ul className="expenses-list__items">
        {expenses.map(expense => (
          <li key={expense.id} className="expenses-list__item">
            <div className="expenses-list__item-title">{expense.description}</div>
            <div className="expenses-list__item-date">{expense.category}</div>
            <div className="expenses-list__item-amount">${expense.money}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
