import React from 'react';

const Hello = ({color, name, isSpecial}) => {
    return (
    <>
        <div style={{color}}>
            { isSpecial && <b>*</b> }
            안녕하세요 {name}
        </div>
    </>
    )  
}

Hello.defaultProps = {
    name: '이름이 없습니다.'
}

export default Hello;