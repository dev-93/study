import React, {useRef} from 'react';
import UserList from "./UserList";



const App = () => {
  const users = [
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
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    
    nextId.current += 1;
  }

  return (
    <>
      <UserList users={users}/>
    </>
  );
}

export default App;
