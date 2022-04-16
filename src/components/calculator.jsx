import React from 'react';
import Input from './input';
import Output from './output';
import Padbuttons from './padbuttons'
import './calculator.css'

const Calculator = () => {
    return (
        <div className='container_calculator'>
            <Input />
            <Output />
            <Padbuttons />
        </div>
    );
}

export default Calculator;
