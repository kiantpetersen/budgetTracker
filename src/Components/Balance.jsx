// import React from 'react';
import logoImg from '../images/logo.svg'

function Balance({ balance }) {
    return (
        <div className='balance-container'>
            <div className='balance-textbox'>
                <h5 className='balance-text'>My Balance: </h5>
                <h2 className='balance-amount'>R{balance()}</h2>
            </div>
            <div className='logo-container'>
                <img className='logo-img' alt='logo_img' src={logoImg} />
            </div>

        </div>
    );
}

export default Balance;