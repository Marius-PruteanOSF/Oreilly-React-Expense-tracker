import { useState } from 'react';

import'./ExpenseItem.css'

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

function ExpenseItem (props) {
    const items = props.items;
    const [filteredYear, setFilteredYear] = useState('2020');

    const yearFilterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        //console.log(selectedYear);
    }

    const filteredExpenses = items.filter(year => {
        return year.date.getFullYear().toString() === filteredYear
    });

    return (
        <>
                <ExpenseFilter onChangeYearFilter={yearFilterChangeHandler} selected={filteredYear}/>
                <ExpensesChart expenses={filteredExpenses} />
            {
                // replacing 'items' as was initial with 'filteredExpenses' so that we can filter by year the list
                filteredExpenses && filteredExpenses.map(item =>
                    <Card key={item.id} className='expense-item'>
                        <ExpenseDate id={item.id} date ={item.date} />
                        <div className="expense-item__description">
                        <h2>{item.title}</h2>
                        </div>
                        <div className="expense-item__price">${item.amount}</div>
                    </Card>
                ) 
            }
            {
                filteredExpenses.length == 0 && <h2 className='not-found-title'>No expenses found for this year</h2>
            }
        </>
        
    )
}

export default ExpenseItem;