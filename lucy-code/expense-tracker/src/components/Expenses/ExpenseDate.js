import './ExpenseDate.css';

function ExpenseDate(props) {
  const date = {
    year: props.date.getFullYear(),
    month: props.date.toLocaleString('en-UK', { month: 'long' }),
    day: props.date.toLocaleString('en-UK', { month: '2-digit' })
  };

  return (
    <div className="expense-date">
      <div className="expense-date__month">{date.month}</div>
      <div className="expense-date__year">{date.year}</div>
      <div className="expense-date__day">{date.day}</div>
    </div>
  );
}

export default ExpenseDate;
