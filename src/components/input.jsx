import React, { useState, createContext } from 'react';
import './input.css'

const Input = () => {
    const [input, setInput] = useState('')
    const AppContext = createContext(null)

    return (
        <AppContext.Provider value={{ input, setInput }}>
            <div className='container input_container'>
                <section>
                    <input  placeholder='Input' />
                </section>
            </div>
        </AppContext.Provider>
    );
}
export default Input;

