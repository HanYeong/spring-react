import React, {useState} from 'react';

const TodoItem = React.memo(function TodoItem({todo, onToggle}) {
   return (
        <li
            style={{textDecoration: todo.done ? 'line-through' : 'none'}}
            onClick={function(){onToggle(todo.id)}}
        >
            {todo.text}
        </li>
   );
});

const TodoList = React.memo(function TodoList({todos, onToggle}) {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
            ))}
        </ul>
    );
});

function Todos({todos, onCreate, onToggle}) {
    const [text, setText] = useState('');
    const onChange = function(e) {
        setText(e.target.value);
    }
    const onSubmit = function(e) {
        e.preventDefault();
        onCreate(text);
        setText('');
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={text} placeholder="press texts" onChange={onChange}/>
                <button type="submit">등록</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle}/>
        </div>
    );
}
export default Todos;