import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    
    // OR we could manage State in one set as an object but need to make sure we update it acordingly across all functions
    // const [userInput, setUserInput ] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // need to use spreader operator so that we dont loose the other attributes from the object because only enteredTitle is set in this function but never relly on previous state to update 
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value,
        // })
        // ----------------------------------------------------------------------------------------------------------------
        // better aproach is to pass in a function to take the previous state LIKE SO
        // setuserInput((prevState) => {
        //     return {...prevState, enteredTitle: e.target.value};
        // })
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value,
        // })
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value,
        // })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        console.log(new Date(enteredDate));

        if (enteredTitle === '' || expenseData.date === 'Invalid Date') {
            return
        }
        
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form action="" onSubmit={submitHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input 
                        placeholder='Enter title' 
                        type="text"
                        value={enteredTitle} 
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input 
                        placeholder='Enter amount' 
                        type="number" 
                        min="0.01" 
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input 
                        placeholder='dd--mm--yy' 
                        type="date" 
                        min="2019-01-01" 
                        max="2022-12-31" 
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit' >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;