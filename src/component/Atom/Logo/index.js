import React from 'react';
import './style.css'

function Logo(props) {
    return (
        <div className='logo'>
            <img className='logoimg' src={props.logo}/>
        </div>
    );
}

export default Logo;