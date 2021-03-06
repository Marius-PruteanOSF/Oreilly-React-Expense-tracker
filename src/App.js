import { useState } from 'react';

import './App.css';
import  ExpenseItem  from '../src/components/Expenses/ExpenseItem';
import Card from '../src/components/UI/Card';
import NewExpense from '../src/components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [ expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    // console.log(expenses);
    // IMPORTANT to setState is to pass a function as argument to update based on previous state snapshot
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Card className="expenses">
       <ExpenseItem items={expenses} />
      </Card>
    </>
  );
}

export default App;
