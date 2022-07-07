import { useState } from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

    const dropDownChangeHandler = (e) => {
        e.preventDefault()
        props.onChangeYearFilter(e.target.value);
    }
    

    return (
        <div className='expenses-filter'>
            <div className="expenses-filter__control">
                <label htmlFor="">Filter by year</label>
                <select name="searchYear" id="searchYear" defaultValue={props.selected} onChange={dropDownChangeHandler} >
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>

        </div>
    )
}

export default ExpenseFilter;