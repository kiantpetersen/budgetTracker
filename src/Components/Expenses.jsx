import React, { useEffect } from 'react';

function Expenses({ data, day, edit }) {

    function handleClick(e) {
        e.preventDefault();
        const target = e.target.name
        const targetId = e.target.closest('.expense-box').id
        if (target === 'create-outline') {
            edit('edit', targetId)
        } else if (target === 'trash-outline') {
            edit('delete', targetId)
        }

    }

    function getExpenses() {
        return data.map((item, key) => {
            return <div id={item.id} key={key} className='expense-box'>

                <p className='expense-title'>{item.name}</p>
                <p className='expense-amount'>Amount: R{item.amount}</p>
                <div className='icons-container'>
                    {/* <div className='icon edit-icon'><ion-icon onClick={handleClick} name="create-outline"></ion-icon></div> */}
                    <div className='icon delete-icon'><ion-icon onClick={handleClick} name="trash-outline"></ion-icon></div>
                </div>
            </div>
        })
    }
    return (
        <div className='expenses-section'>
            <h2 className='expense-heading'>{day} Expenses</h2>
            <div className='expenses-container'>
                {getExpenses()}


            </div>

        </div>
    );
}

export default Expenses;