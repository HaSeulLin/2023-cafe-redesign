import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMemoRedux, addMemoToolkit, deleteMemoRedux, deleteMemoToolkit } from '../slices/memoSlice';

export default function MemoBox() {

    const memo = useSelector((state)=>(state.memo));
    const dispatch = useDispatch();

    const [inputMemo, setInputMemo] = useState("");

  return (
    <div>
        <h1>Memo</h1>
        <ul>
            {
                memo.map((m, index)=>(
                    <li key={m.id}>
                    <h3>{m.id}</h3>
                    <h3>{m.text}</h3>
                    <p>{m.date}</p>
                    <button
                        onClick={()=>dispatch(deleteMemoRedux(m.id))}
                        >x</button>
                    <button
                    // memo 배열의 index 값을 전달하여 splice를 이용하여 삭제
                        onClick={()=>dispatch(deleteMemoToolkit(index))}
                    >index-x</button>
                    <hr />
                </li>
                ))
            }
        </ul>
        {/**
         * memo redux 내용 확인 후, slice와 비교
         * input 태그를 이용해서 입력 받아와서 수정하기
         */}
         <form action=""
            onSubmit={(e)=>{e.preventDefault(); dispatch(addMemoRedux({text:inputMemo})); setInputMemo("")}}
         >
            <input type="text"
                value={inputMemo}
                onChange={(e)=>(setInputMemo(e.target.value))}
            />
            <button type='submit'
            >redux 메모추가</button>
         </form>
         <form action=""
            onSubmit={(e)=>{e.preventDefault(); dispatch(addMemoToolkit({text:inputMemo})); setInputMemo("");}}
         >
            <input type="text"
                value={inputMemo}
                onChange={(e)=>(setInputMemo(e.target.value))}
            />
            <button type='submit'
            >toolkit 메모추가</button>
         </form>
    </div>
  )
}
