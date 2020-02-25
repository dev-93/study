import React, {useState} from 'react';
// 리액트 패키지에서 useState 라는 함수를 불러옴
const Counter = () => {

    const [number, setNumber] = useState(0);
    // useState를 사용할 때에는 상태의 기본값을 파라미터로 넣어서 호출
    // 이 함수를 호출해주면 배열이 반한됨
    // 첫번째 원소(number)는 현재 상태, 두번째 원소(setNumber)는 Setter 함수
    // Setter 함수는 파라미터로 전달 받은 값을 최신 상태로 설정

    // const numberState = useState(0);
    // const number = numberState[0];
    // const setNumber = numberState[1];
    // 원래는 이렇게 해야하지만 배열 비구조화 할당을 통해 각 언소를 추출한 것이 다음과 같음  
    
    const onIncrease  = () => {
        setNumber(number + 1);
    }

    const onDecrease  = () => {
        setNumber(number - 1);
    }

    return(
        <>
            <h1>{number}</h1>
            <button onClick={onIncrease }>+</button>
            <button onClick={onDecrease }>-</button>
        </>
    )
}

export default Counter;