import React from 'react';
import './App.css'
import Banner from './component/Organisms/Banner';
import Header from './component/Organisms/Header';
import TestCallBack from './component/Organisms/TestCallBack';
import TestMemo from './component/Organisms/TestMemo';

function App(props) {
  return (
    <div>
      <Header/>
      <Banner/>
      <br/>
      <TestMemo/>
      <br/>
      <TestCallBack/>
    </div>
  );
}

export default App;