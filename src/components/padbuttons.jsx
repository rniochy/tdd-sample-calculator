import React from 'react';
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

const Padbuttons = () => {
    return (
        <div className='container padbutton_conatiner'>
            <section>
                <article>
                    <button><RiNumber7 /></button>
                    <button><RiNumber8 /></button>
                    <button><RiNumber9 /></button>
                    <button> + </button>
                    <button><RiNumber4 /></button>
                    <button><RiNumber5 /></button>
                    <button><RiNumber6 /></button>
                    <button>*</button>
                    <button><RiNumber1 /></button>
                    <button><RiNumber2 /></button>
                    <button><RiNumber3 /></button>
                    <button> - </button>
                    <button><RiNumber0 /></button>
                    <button>.</button>
                    <button>C</button>
                    <button>/</button>
                    <button>AC</button>
                </article>
            </section>
        </div>
    );
}

export default Padbuttons;
