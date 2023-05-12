import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAddThunk, addNum, addNumThunk } from '../modules/counterThunk';

export default function CounterThunk() {

    const counterThunk = useSelector((state)=>(state.counterThunk));
    const dispatch = useDispatch();

  return (
    <div>
        <h2>CounterThunk</h2>
        <p>{counterThunk.num}, {counterThunk.thunkNum}</p>
        <button
            onClick={()=>(dispatch(addNum()))}
        >리덕스액션함수(+1)</button>
        <button
            onClick={()=>(dispatch(addNumThunk()))}
        >리덕스 Thunk 액션함수</button>
        <button
            onClick={()=>(dispatch(addAddThunk()))}
        >리덕스 Thunk 더블 액션함수</button>
    </div>
  )
}
