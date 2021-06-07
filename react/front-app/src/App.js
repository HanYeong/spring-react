import React, { useState, useEffect } from 'react';
import customAxios from './customAxios';
import './App.scss';
import Board from './components/Board';
import Topbar from './components/Topbar';

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
        <Board/>
      </div>
    </>
  );
}

export default App;

//     logo text       search
//             body
//navi                        navi