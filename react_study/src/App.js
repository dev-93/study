import React from 'react';
import Hello from "./Hello";
import Wrapper from "./Wrapper"

const App = () => {
  return (
    <>
      <Wrapper>
        <Hello name="react" color="skyblue" isSpecial={true} />
        <Hello color="brown"/>
      </Wrapper>
    </>
  );
}

export default App;
