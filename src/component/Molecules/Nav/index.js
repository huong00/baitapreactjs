import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'

function Nav(props) {
    return (
        <div className='nav'>
            <Link to='/'>ホーム</Link>
            <Link to='/about'>会社情報</Link>
            <Link to='/services'>サービス</Link>
            <div className='dropdown'>
                <Link to='/technical'>テクニカルスタック</Link>
                <div className='dropdown-content'>
                    <Link to='/technical'>Reactのテクニカルスタック</Link>
                    <Link to='/react-native'>React Nativeのテクニカルスタック</Link>
                    <Link to='/CodeSample'>CodeSample</Link><br/>
                    <Link to='/RNCodeSample'>RNCodeSample</Link>
                </div>
            </div>
            <Link to='/team'>当社のチーム</Link>
            <Link to='/projects'>プロジェクト</Link>
            <Link to='/contact'>お問い合わせ</Link>
        </div>
    );
}

export default Nav;