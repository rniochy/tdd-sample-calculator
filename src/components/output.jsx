import React, {useContext} from 'react';
import { AppContext } from './calculator';
import './output.css'

const Output = () => {
    const {output} = useContext(AppContext)
    return (
        <div className='container output_continer'>
            <section>
                <input placeholder='0' readOnly value={output} />
            </section>
        </div>
    );
}
export default Output;

