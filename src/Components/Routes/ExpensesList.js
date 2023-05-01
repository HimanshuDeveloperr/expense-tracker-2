import React, { useState } from 'react';
import './ExpensesList.css';
import { BsBackspaceReverseFill, BsBrushFill } from 'react-icons/bs';

const ExpensesList = ({ expenses, onDelete ,onEdit}) => {
  const [editExpense, setEditExpense] = useState(null);

  const deleteHandler = (expense) => {
    onDelete(expense.id);
  };

  const editHandler = (expense) => {
    setEditExpense(expense);
  };

  const saveEditHandler = (updatedExpense) => {
    setEditExpense(null);
    // call a function to save the updated expense
    onEdit(updatedExpense)
  };

  return (
    <div className="expenses-list">
      {!editExpense && (
        <ul className="expenses-list__items">
          {expenses.map((expense) => (
            <li key={expense.id} className="expenses-list__item">
              <div className="expenses-list__item-title">{expense.description}</div>
              <div className="expenses-list__item-date">{expense.category}</div>
              <div className="expenses-list__item-amount">${expense.money}</div>
              <div className="mx-3" onClick={() => deleteHandler(expense)}>
                <BsBackspaceReverseFill />
              </div>
              <div onClick={() => editHandler(expense)}>
                <BsBrushFill />
              </div>
            </li>
          ))}
        </ul>
      )}

      {editExpense && (
        <div className="edit-expense">
          <form onSubmit={(event) => {
            event.preventDefault();
            const updatedExpense = {
              ...editExpense,
              description: event.target.description.value,
              category: event.target.category.value,
              money: event.target.money.value,
            };
            saveEditHandler(updatedExpense);
          }}>
            <label>
              Description:
              <input type="text" name="description" defaultValue={editExpense.description} />
            </label>
            <label>
              Category:
              <input type="text" name="category" defaultValue={editExpense.category} />
            </label>
            <label>
              Amount:
              <input type="number" name="money" defaultValue={editExpense.money} />
            </label>
            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditExpense(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ExpensesList;
