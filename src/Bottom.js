import React from 'react';
import Ele from './Ele.css';

const Bottom = ({title ="Nothing"}) =>{

    return(
        
        <button className="button bcd" >{title}
        <div style={{marginLeft:"92px"}}>
        <i className="fa fa"></i>
        </div>
        </button>
        );
}

export default Bottom;