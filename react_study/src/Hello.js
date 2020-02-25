import React from 'react';

const Hello = (props) => {
    return (
    <>
        <div>Hello {props.name} </div>
        <div style={{ color:props.color}}>App컴포넌트에서 전달받은 props의 color는 {props.color}입니다 </div>
    </>
    )  
}

export default Hello;