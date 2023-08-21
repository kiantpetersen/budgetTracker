/* eslint-disable react/prop-types */
// import React from 'react';

import { useState } from "react";

function Edit(props) {
    const [day, setDay] = useState('Tod')
    // const [amount, setAmount] = useState(0)
    const [item, setItem] = useState({
        name: '',
        amount: 0,
    })
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    function handleChange(e) {
        setItem({ ...item, [e.target.name]: e.target.value })
    }
    function handleSelect(e) {
        setDay(e.target.value)
    }
    function handleClick() {
        const date = new Date()
        let currentDay = weekday[date.getDay()]
        if (day === 'Tod') {
            setDay(currentDay)
            props.editData(currentDay, item)
        } else {
            props.editData(day, item)
        }
        setItem({
            name: '',
            amount: 0
        })
    }
    return (
        <div className='edit-container'>
            <h2 className="edit-heading">Add Item</h2>
            <div className="edit-box">
                <label className='edit-label'>Enter Expense</label>
                <input
                    className="amount-input"
                    name='name'
                    type='string'
                    value={item.name}
                    onChange={handleChange}
                />
            </div>
            <div className="edit-box">
                <label className='edit-label'>Enter Amount</label>
                <input
                    className="amount-input"
                    name='amount'
                    type='Number'
                    required pattern="\d+"
                    value={item.amount}
                    onChange={handleChange}
                />
            </div>
            <div className="edit-box">

                <label className='edit-label' >Select day</label>
                <select value={day} onChange={handleSelect} className="day-select-box">
                    <option className='edit-select-option' value='Tod'>Today</option>
                    <option className='edit-select-option' value='Mon'>Monday</option>
                    <option className='edit-select-option' value='Tue'>Tuesday</option>
                    <option className='edit-select-option' value='Wed'>Wednesday</option>
                    <option className='edit-select-option' value='Thu'>Thursday</option>
                    <option className='edit-select-option' value='Fri'>Friday</option>
                    <option className='edit-select-option' value='Sat'>Saturday</option>
                    <option className='edit-select-option' value='Sun'>Sunday</option>
                </select>
            </div>
            <button onClick={handleClick} className="edit-btn">Add</button>

        </div>
    );
}

export default Edit;