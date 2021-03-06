import React, { useContext, useState } from 'react';
import CalculatorClass from '../calculatorClass/calculatorClass';
import { AppContext } from './calculator';
import './padbuttons.css'

const MATCH_SIMBOL = /[+,/,\-,*]/
const ERROR_MESSAGE = 'ERR : invalid format'
const Padbuttons = () => {
    const { input, setInput, setOutput, output } = useContext(AppContext);

    const handleClick = (e) => {
        const [value] = e.target.value;

        if (output) {
            if (output === ERROR_MESSAGE) {
                setOutput("")

            } else {
                setInput(output + "" + value)
                setOutput("")
            }
        }
        else {
            setInput(input + "" + value);
        }
    }
    const handleClickCleanCharacter = () => {
        setInput(() => input.substring(0, input.length - 1))

    }
    const handleClickCleanInput = () => {
        setInput('')
        setOutput('')

    }
    const handleResultInput = () => {
        const calculator = new CalculatorClass();
        const result = calculator.calculateValue(input);

        if (result == 0) {
            setOutput(result)
        } else if (result) {
            setOutput(result)
        } else {
            setOutput(ERROR_MESSAGE)
        }
    }
    const handleClickSingnal = (e) => {
        const simbolValue = e.target.value
        console.log(input.match(MATCH_SIMBOL))
        if (input.match(MATCH_SIMBOL)) 
            setInput(input.replace(MATCH_SIMBOL, simbolValue))
            else 
            setInput(input + "" + simbolValue);
    }
    return (
        <div className='container padbutton_conatiner'>
            <section>
                <article>
                    <button value="7" onClick={handleClick}>7</button>
                    <button value="8" onClick={handleClick}>8</button>
                    <button value="9" onClick={handleClick}>9</button>
                    <button value="+" onClick={handleClickSingnal}>+</button>
                    <button value="4" onClick={handleClick}>4</button>
                    <button value="5" onClick={handleClick}>5</button>
                    <button value="6" onClick={handleClick}>6</button>
                    <button value="*" onClick={handleClickSingnal}>*</button>
                    <button value="1" onClick={handleClick}>1</button>
                    <button value="2" onClick={handleClick}>2</button>
                    <button value="3" onClick={handleClick}>3</button>
                    <button value="-" onClick={handleClickSingnal}>-</button>
                    <button value="0" onClick={handleClick}>0</button>
                    <button value="." onClick={handleClick}>.</button>
                    <button onClick={handleClickCleanCharacter}>C</button>
                    <button value="/" onClick={handleClickSingnal}>/</button>
                    <button onClick={handleClickCleanInput}>AC</button>
                    <button onClick={handleResultInput}> = </button>
                </article>
            </section>
        </div>
    );
}

export default Padbuttons;
