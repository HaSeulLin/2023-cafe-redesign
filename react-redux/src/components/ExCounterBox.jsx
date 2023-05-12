import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../modules/counter';

export default function ExCounterBox() {

    const count = useSelector((state)=>(state.counter));
    const dis = useDispatch((state)=>(state.counter));

  return (
    <div>
        <h2>ExCounterBox</h2>
        <p>CounterBox에서 한 내용 복습</p>
        <p>useSelecotr를 이용하여 값 가져오기</p>
        <h3>{count}</h3>
        <button
            onClick={()=>(dis(decrease()))}
        >-1</button>
        <button
            onClick={()=>(dis( { type : "INCREASE" } ))}
        >+1</button>
        <p>useDispatch를 이용하여 값 수정하기</p>
    </div>
  )
}
