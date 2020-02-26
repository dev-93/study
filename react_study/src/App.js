import React, {useRef, useState} from 'react';
import UserList from "./UserList";
import CreateUser from "./CreateUser";

const App = () => {
  const [inputs, setInputs] = useState({
    username:'',
    email:''
  });

  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  };

  const [users, setUsers] = useState([
    {
        id:1,
        username:"taenam",
        email:'public@y.com'
    },{
        id:2,
        username:"jihun",
        email:'test@y.com'
    },{
        id:3,
        username:"cheolho",
        email:'liyer@y.com'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username:'',
      email:''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove}/>
    </>
  );
}

export default App;
