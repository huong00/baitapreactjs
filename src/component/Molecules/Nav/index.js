import React from 'react';
import './style.css'
import Link from '../../Atom/Link';

function Nav(props) {
    return (
        <div className='nav'>
            <Link link='ホーム'/>
            <Link link='会社情報'/>
            <Link link='サービス'/>
            <Link link='テクニカルスタック'/>
            <Link link='当社のチーム'/>
            <Link link='プロジェクト'/>
            <Link link='お問い合わせ'/>
        </div>
    );
}

export default Nav;