import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addValue, addValueAsync } from '../slices/thunkSlice';

export default function ThunkBox() {

  const thunkCounter = useSelector((state)=>(state.thunkCounter));
  const dispatch = useDispatch();

  return (
    <div>
        <h1>Thunk Box</h1>
        <p>{thunkCounter.value}</p>
        <button
          onClick={()=>(dispatch(addValue()))}
        >+1</button>
        <button
          onClick={()=>(dispatch(addValueAsync()))}
        >
          1초 뒤 +1
        </button>
    </div>
  )
}
