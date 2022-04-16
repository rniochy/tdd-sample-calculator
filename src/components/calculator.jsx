import React, { createContext, useState } from 'react';
import Input from './input';
import Output from './output';
import Padbuttons from './padbuttons'
import './calculator.css'

export const AppContext = createContext(null)

const Calculator = () => {
    const [input, setInput] = useState("")
    const [ output, setOutput] = useState("")
    return (
        <AppContext.Provider value={{ input, setInput, output, setOutput }}>
            <div className='container_calculator'>
                <Input />
                <Output />
                <Padbuttons />
            </div>
        </AppContext.Provider >
    );
}
export default Calculator;
