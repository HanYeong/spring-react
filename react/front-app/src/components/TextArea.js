import React from 'react';
import '../scss/textArea.scss';
import axios from 'axios';
import useAsync from './useData';

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
      <div className="text">
        {text.map(text => (
          <span  key={text.id}>
            <h3>{text.name}</h3>
            <p>{text.username} ({text.email})</p>
          </span>
        ))}         
      </div>
    </>
  );
}
export default TextArea;