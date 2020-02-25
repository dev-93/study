import React from 'react';

const Hello = ({color, name}) => {
    return (
    <>
        <div>Hello {name} </div>
        <div style={{color}}>App컴포넌트에서 전달받은 props의 color는 {color}입니다 </div>
    </>
    )  
}

export default Hello;