import React, {useState} from 'react';
import './style.css'
import Title from '../../Atom/Title';

function Banner(props) {
    const [show, setShow] = useState(true)
    const [title, setTitle] = useState('ReactJS')

    return (
        <div className='backgr'>
            <img src='/img/slide3.jpg'/>

            <div className='banner-content'>
                {show && <Title/>}
                <button className='btn' onClick={() => setShow(!show)}>Hide</button>
                <p>何百もの {title} トを提供します</p>
                <button className='btn' onClick={() => setTitle('React Native')}>Fix</button>
            </div>
        </div>

    );
}

export default Banner;