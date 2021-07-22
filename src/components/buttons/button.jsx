import React, { Children } from 'react';
import './button.styles.scss';

function Button(props){
    // function handleClick(e){
    //     e.preventDefault();
    //     props.addT(id)
    // }
    return(
        <div >
            <button className={`${props.type} button touch`} onClick={props.handleClick}></button>
        </div>
    );
}
export default Button;