import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { decrease_number, increase_number, change_number } from '../modules/counterNumber';

export default function CounterNumber() {

    
    const counterNumber = useSelector((state)=>(state.counterNumber));
    const dispatchNumber = useDispatch();

    // input의 값을 입력 받아 올 때는 바로 redux로 접근하지 않고
    // useState로 값을 받아온 후 확정되면 redux로 전달
    const [ newNum, setNewNum ] = useState(1);
  return (
    <div>
        <hr />
            <div>
                <p>counterNumber의 (state)객체에서 값을 가져와서 출력</p>
                <p>{counterNumber.count}</p>
            </div>
            <button
                onClick={()=>{dispatchNumber(decrease_number(counterNumber.num))}}
            >-{counterNumber.num}</button>
            <button
                onClick={()=>{dispatchNumber(increase_number(counterNumber.num))}}
            >+{counterNumber.num}</button>
            <input type="text"
                onChange={(e)=>{setNewNum(e.target.value)}}
                value={newNum}
            />
            <button
                onClick={()=>{dispatchNumber(change_number(parseInt(newNum))); setNewNum("");}}
            >변경할 num 값 입력</button>
        <hr />
    </div>
  )
}
