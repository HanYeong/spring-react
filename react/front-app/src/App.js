import React, { useState, useEffect } from 'react';
import customAxios from './customAxios';
import './App.scss';
import Board from './components/Board';
import Topbar from './components/Topbar';
import Title from './components/Title';
import Date from './components/Date';
import Info from './components/Info';
import SubTitle from './components/SubTitle';
import TextArea from './components/TextArea';

function App() {
  const [ip, setIp] = useState('');

  function callback(data){
    setIp(data);
  }
  useEffect(() => {
    customAxios('/ip', callback);
  }, []);
  return (
    <>
      <div className="App">
        <Topbar/>
        <Board>
          <Title/>
          <Date/>
          <Info/>
          <SubTitle/>
          <TextArea/>
        </Board>
      </div>
    </>
  );
}

export default App;

//     logo text       search
//             body
//navi                        navi