import'./ExpenseItem.css'

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem (props) {
    const items = props.items;
console.log('calltimes');
    return (
        <>
            {
                items.map(item =>
                    <Card id={item.id} className='expense-item'>
                        <ExpenseDate id={item.id} date ={item.date} />
                        <div className="expense-item__description">
                        <h2>{item.title}</h2>
                        </div>
                        <div className="expense-item__price">${item.amount}</div>
                    </Card>
                )
            }
        </>
        
    )
}

export default ExpenseItem;