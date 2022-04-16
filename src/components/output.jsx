import React, {useContext} from 'react';
// import { AppContext } from './input.';
import './output.css'

const Output = () => {

    // const {input} = useContext(AppContext)
    return (
        <div className='container output_continer'>
            <section>
                <input placeholder='0' readOnly />
            </section>
        </div>
    );
}

export default Output;

