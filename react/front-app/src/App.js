import React from 'react';
// import customAxios from './customAxios';
import './App.scss';
import Board from './components/Board';
import Topbar from './components/Topbar';
import Title from './components/Title';
import BoardDate from './components/BoardDate';
import Info from './components/Info';
import SubTitle from './components/SubTitle';
import TextArea from './components/TextArea';

function App() {
  // const [ip, setIp] = useState('');

  // function callback(data){
  //   setIp(data);
  // }
  // useEffect(() => {
  //   customAxios('/ip', callback);
  // }, []);
  return (
    <>
      <div className="App">
        <Topbar/>
        <Board>
          <Title/>
          <BoardDate/>
          <Info/>
          <SubTitle/>
          <TextArea name="TA" id="FA"/>
        </Board>
      </div>
    </>
  );
}

export default App;