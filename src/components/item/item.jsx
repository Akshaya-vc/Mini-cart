import React, {useState} from 'react';
import './item.styles.scss';


const Item = (props) => {
    
    return(
    
    <div>
        
        
        <div className='itemcomp'>

           <div className='ind-display'>{props.count}</div>
            <button className={`new button touch`} onClick={() => props.add(props.id, props.count)}></button>
            <button className={`cancel button touch`} onClick={() => props.cancel(props.id, props.count)}></button>
            <button className={`delete button touch`} onClick={() => props.remove(props.id)}></button>
        </div>
    </div>
); 
}


export default Item;
