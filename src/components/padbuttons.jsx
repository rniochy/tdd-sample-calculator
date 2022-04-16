import React, { useContext } from 'react';
import './padbuttons.css'

import { RiNumber0 } from 'react-icons/ri'
import { RiNumber1 } from 'react-icons/ri'
import { RiNumber2 } from 'react-icons/ri'
import { RiNumber3 } from 'react-icons/ri'
import { RiNumber4 } from 'react-icons/ri'
import { RiNumber5 } from 'react-icons/ri'
import { RiNumber6 } from 'react-icons/ri'
import { RiNumber7 } from 'react-icons/ri'
import { RiNumber8 } from 'react-icons/ri'
import { RiNumber9 } from 'react-icons/ri'
import { FaTimes } from 'react-icons/fa'
import { RiDivideLine } from 'react-icons/ri'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'

// import { AppContext } from './calculator';

const Padbuttons = () => {

    // const { input, setInput } = useContext(AppContext)
    return (
        <div className='container padbutton_conatiner'>
            <section>
                <article>
                    <button ><RiNumber7 /></button>
                    <button><RiNumber8 /></button>
                    <button><RiNumber9 /></button>
                    <button><AiOutlinePlus /></button>
                    <button><RiNumber4 /></button>
                    <button><RiNumber5 /></button>
                    <button><RiNumber6 /></button>
                    <button style={{ fontSize: "9pt" }}><FaTimes /></button>
                    <button><RiNumber1 /></button>
                    <button><RiNumber2 /></button>
                    <button><RiNumber3 /></button>
                    <button> <AiOutlineMinus /> </button>
                    <button><RiNumber0 /></button>
                    <button><BsDot /></button>
                    <button>C</button>
                    <button><RiDivideLine /></button>
                    <button>AC</button>
                </article>
            </section>
        </div>
    );
}

export default Padbuttons;
