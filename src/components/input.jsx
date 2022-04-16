import React, { useState, useContext } from 'react';
import { AppContext } from './calculator';
import './input.css';

const Input = () => {
    const { input } = useContext(AppContext)
    return (
        <div className='container input_container'>
            <section>
                <input placeholder='0' value={input} />
            </section>
        </div>
    );
}
export default Input;

