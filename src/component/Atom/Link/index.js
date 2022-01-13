import React from 'react';
import './style.css'

function Link(props) {
    return (
        <div className='link'>
            <a href=''>{props.link}</a>
        </div>
    );
}

export default Link;