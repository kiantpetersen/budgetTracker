/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Chart from "./Chart";
function SpendingView({ statement, expenses, spent }) {
    function handleClick(arr, day) {
        expenses(arr, day)
    }


    return (
        <div className="spending-container">
            <h2 className='spending-heading'>Spending - Last 7 days</h2>
            <Chart data={statement} onClick={handleClick} />
            <div className="spending-infobox">
                <div className="info-textbox">
                    <p className='balance-text'>Total this month</p>
                    <h2 className='spent-amount'>
                        R{spent()}
                    </h2>
                </div>
                <div className="info-textbox">
                    <p className='balance-text balance-text-bold'>+2.3%</p>
                    <p className='balance-text'>from last month</p>
                </div>
            </div>
        </div>
    );
}

export default SpendingView;