import './App.css';
import { styled } from 'styled-components'
import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FrameTemplate = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const InputBox = styled.div`
margin: 30px;
`;

const TodoListContainer = styled.div`
width: 95%;
min-height: 100px;
display: flex;
justify-content: flex-start;
gap: 20px;

`;
const TodoListItem = styled.div`
height : 100px;
width : 100px;
border-radius:20px;
padding: 5px;
border : 2px solid green;
word-break: break-all;
`;

function App() {
  const [value, setValue] = useState('');
  const [todo, setTodo] = useState([]);


  const onSubmit = useCallback((e) => {
    let uuid = uuidv4();
    const input = { uuid, value };
    setTodo([...todo, input]);
    setValue('');
    e.preventDefault();
  }, [value]);

  const onChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  return (
    <FrameTemplate>
      <InputBox>
        <form onSubmit={onSubmit}>
          <input type='text' value={value} onChange={onChange}></input>
          <button type='submit'>추가하기</button>
        </form>
      </InputBox>
      <h1>Todo List</h1>
      <TodoListContainer>
        {todo.map((a) => {
          return (
            <TodoListItem key={a.uuid}>
              <p>{a.value}</p>
            </TodoListItem>
          )
        })}
      </TodoListContainer>

    </FrameTemplate>
  );
}

export default App;
