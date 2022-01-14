import React, {Component} from 'react';
import './style.css'

import Banner from '../../Organisms/Banner';
import TestMemo from '../../Organisms/TestMemo';
import TestCallBack from '../../Organisms/TestCallBack';

function Home(props) {
    return (
        <div>
            <Banner/>
            <TestMemo/>
            <TestCallBack/>
        </div>
    );
}

export default Home;