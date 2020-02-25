import React, {useState} from 'react';

const InputSample = () => {
    const [text, setText] = useState('');

    const onChange = (e) => {
        // 이벤트 객체 e를 파라미터로 받아와서 사용
        setText(e.target.value);
        // e.target은 이벤트가 발생한 DOM인 input DOM을 가르킴
        // 이 DOM의 value값
        // e.target.value를 조회하면 현재 input에 입력한 값이 무엇인지 알 수 있음.
        console.log(e.target.value);
    };

    const onReset = () => {
         setText("");
    };

    return (
        <>
            <input onChange={onChange} value={text}/>
            {/* input의 상태를 관리할 때, input 태그의 value값도 설정해주어야함 */}
            {/* 그렇게 해야, 상태가 바뀌었을때, input의 내용도 업데이트가 된다 */}
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text} </b>
            </div>
        </>
    )
}

export default InputSample;