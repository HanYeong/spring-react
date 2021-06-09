import React, { useState } from 'react';
import '../scss/textArea.scss';
function User({user}){
    return (
      <><b>{user.username}</b> <span>({user.email})</span><br/></>
    );
}
function TextArea({name, id}){
    const [users, setUsers] = useState([
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com'
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com'
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com'
        }
      ]);
      
      
    return (
        <div className="text">
            <h3>
                1. 청순 예찬
            </h3>
            <p>
                길지 거친 뭇 이상은 그들은 우리의 이상, 인생에 아름다우냐? 고동을 무엇을 지혜는 산야에 인간이 원질이 불어 갑 봄바람이다.
            </p>

            <h3>
                2. 별 헤는 밤
            </h3>
            <p>
                어머님, 가득 위에 까닭입니다. 나는 헤는 나의 하나의 그리고 패, 어머님, 계절이 못 까닭입니다. 묻힌 소학교 봄이 봅니다. 하나에 이름과, 슬퍼하는 하나 것은 나는 쓸쓸함과 듯합니다.
                {name}
                {id}
                { name === "TA" ? "as" : null }
                <br/>
                {users.map((user, index) => (
                    <User user={user} key={index} />
                ))}
            </p>
            <p>
            </p>
        </div>
    );
}
export default TextArea;