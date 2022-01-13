import React from 'react';
import './style.css'
import Nav from '../../Molecules/Nav';
import Logo from '../../Atom/Logo';
import MoFlag from '../../Molecules/MoFlag';
function Header(props) {
    return (
        <div className='header'>
            <Logo logo="img/logoreactplus.png"/>
            <Nav/>
            <MoFlag/>
        </div>
    );
}


export default Header;