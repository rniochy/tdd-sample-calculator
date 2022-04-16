import React, { useState, useContext } from 'react';
import { AppContext } from './calculator';
import './input.css';
import Padbuttons from './padbuttons';


const Input = () => {
    const {input} = useContext(AppContext)
    return (
        <div className='container input_container'>
            <section>
                <input placeholder='Input' value={input} />
            </section>
        </div>
    );
}
export default Input;

