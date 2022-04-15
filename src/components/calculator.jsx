import React from 'react';
import Input from './input';
import Output from './output';
import Padbuttons from './padbuttons'

const Calculator = () => {
    return (
        <div>
            <Input />
            <Output />
            <Padbuttons />
        </div>
    );
}

export default Calculator;
