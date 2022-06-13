import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const { items } = props;

  const [selectedYear, setSelectedYear] = useState('');

  const dateHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = items.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={selectedYear} onDateSelect={dateHandler} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
