import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isAddingExpense, setIsAddingExpense] = useState(true);

  const startAddingHandler = () => {
    setIsAddingExpense(true);
  };

  const stopAddingHandler = () => {
    setIsAddingExpense(false)
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    stopAddingHandler()
  };

  return (
    <div className="new-expense">
      {!isAddingExpense && (
        <button type="button" onClick={startAddingHandler}>
          Add new expense!
        </button>
      )}{' '}
      {isAddingExpense && (
        <ExpenseForm
          items={props.items}
          onCancel={stopAddingHandler}
          onSubmit={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
