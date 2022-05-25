import {useState} from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title)
  console.log('ExpenseItem evaluated by React');

  const clickHandler = () => {
   setTitle("Updated!")
   console.log("React is updating the component")
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
