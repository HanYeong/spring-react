import React from 'react';
// import customAxios from './customAxios';
import './App.scss';
import TextArea from './components/TextArea';
import { Link, Route } from 'react-router-dom';
import Home from './components/Home';
import Topbar from './components/Topbar';

function App() {
  // const [ip, setIp] = useState('');

  // function callback(data){
  //   setIp(data);
  // }
  // useEffect(() => {
  //   customAxios('/ip', callback);
  // }, []);
  return (
    // <>
    //   <div className="App">
    //     <Topbar/>
    //     <Board>
    //       <Title/>
    //       <BoardDate/>
    //       <Info/>
    //       <SubTitle/>
    //       <TextArea/>
    //     </Board>
    //   </div>
    // </>
    <div>
      <Link to="/">홈</Link>
      <Link to="/text">텍스트</Link>
      <Route path="/" exact={true}>
        <Topbar/>
        <TextArea/>
      </Route>
      <Route path="/text" exact={true} component={TextArea}/>
    </div>
  );
}

export default App;