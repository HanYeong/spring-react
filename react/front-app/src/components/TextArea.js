import React from 'react';
import '../scss/textArea.scss';
import axios from 'axios';
import useAsync from './useData';
import Topbar from './Topbar';
import Board from './Board';
import Title from './Title';
import BoardDate from './BoardDate';
import Info from './Info';
import SubTitle from './SubTitle';

async function getUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
}

function TextArea(){
const [state] = useAsync(getUsers, []);

const { loading, data: text, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!text) return null;
  return (
    <>
      <Topbar/>
      <Board>
      <Title/>
      <BoardDate/>
      <Info/>
      <SubTitle/>
      <div className="text">
        {console.log(text.length)}
        {text.map(text => (
          <span  key={text.id}>
            <h3>{text.name}</h3>
            <p>{text.username} ({text.email})</p>
          </span>
        ))}         
      </div>
      </Board>
      
    </>
  );
}
export default TextArea;