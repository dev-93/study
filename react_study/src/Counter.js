import React, {useState} from 'react';

const Counter = () => {

    const [number, setNumber] = useState(0);
    
    const onIncrease  = () => {
        setNumber(prevNumber => prevNumber + 1);
    }

    const onDecrease  = () => {
        setNumber(prevNumber => prevNumber - 1);
    }

    // onIncrease 와 onDecrease 에서 setNumber 를 사용 할 때 그 다음 상태를 파라미터로 넣어준것이 아니라,
    // 값을 업데이트 하는 함수를 파라미터로 넣어주었다.
    return(
        <>
            <h1>{number}</h1>
            <button onClick={ onIncrease }>+</button>
            <button onClick={ onDecrease }>-</button>
        </>
    )
}

export default Counter;