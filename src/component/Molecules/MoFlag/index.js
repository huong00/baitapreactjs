import React from 'react';
import Flag from '../../Atom/Flag';
import './style.css'

function MoFlag(props) {
    return (
        <div className='moflag'>
            <Flag flag="/img/vn.png"/>
            <Flag flag="/img/co-nhat.png"/>
        </div>
    );
}

export default MoFlag;