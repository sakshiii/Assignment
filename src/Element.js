import React from 'react';
import Ele from './Ele.css';

const Element = ({title ="Nothing"}) =>{

    
    if(title==="Booked On")
    {
        return(
            
            <button className="button abc" >{title} 
            <div style={{marginLeft:"80px" , color:"#777E8B"}}>
            <i class="fa fa-sort-amount-desc" aria-hidden="true"></i>
            </div>
            </button>
            
        );

    }
            
            return(

            <button className="button abc" >{title} 
            <div style={{marginLeft:"80px"}}>
            <i class="fa fa-long-arrow-up" aria-hidden="true"></i><i class="fa fa-long-arrow-down" aria-hidden="true"></i>
            </div>
            </button>

            );
            
    
};

export default Element;