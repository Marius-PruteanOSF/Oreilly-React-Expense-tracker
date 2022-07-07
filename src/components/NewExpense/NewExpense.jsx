import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const [addExpenses, setAddExpenses] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setAddExpenses(false);
    }

    const onHandleNewExpenses = () => {
        setAddExpenses(true);
    }
    
    const onHandleCancel = () => {
        setAddExpenses(false);
    }

    return (
        <div className="new-expense">
            {!addExpenses && <button onClick={onHandleNewExpenses}>Add New Expenses</button>}
            {addExpenses && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={onHandleCancel}/>}
        </div>
    )
}

export default NewExpense;