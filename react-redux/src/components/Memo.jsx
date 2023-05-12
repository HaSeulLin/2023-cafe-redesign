import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMemo, deleteMemo } from '../modules/memo';

export default function Memo() {

    const memo = useSelector((state)=>(state.memo));
    const dispatch = useDispatch((state)=>(state.memo));
//    console.log(memo)
//    console.log(memo[0].text)

    const [inputMemo, setInputMemo] = useState("");
    const onAddMemo = () => {
        dispatch(
            addMemo(
                {
                    text : inputMemo,
                    date : "2023-05-13"
                }
            ));
            setInputMemo("");
    }

  return (
    <div>
        <h1>Memo</h1>
        <ul>
            {
                memo.map((memo)=>
                    <li key={memo.id} style={{listStyle:'none', borderBottom:'1px solid black'}}>
                        <p>{memo.id}</p>
                        <p>{memo.text}</p>
                        <p>{memo.date}</p>
                        <button
                        // 클릭했을 때 memo.id를 액션생성함수로 전달 해서
                        // 리듀서에서 filter을 통해 새 배열 만들기
                            onClick={()=>(dispatch(deleteMemo(memo.id)))}
                        >x</button>
                    </li>
                )
            }
        </ul>
        <textarea name="" id="" cols="30" rows="10" placeholder='메모를 입력하세요' value={inputMemo}
            onChange={(e)=>(setInputMemo(e.target.value))}
        />
        <br />
        <button
            onClick={onAddMemo}
        >메모 추가</button>
        {/** form으로 만들어서 submit으로 실행 */}
        <form action=""
            onSubmit={
                (e)=>{
                    e.preventDefault();
                    // 이벤트에 바로 작성할 때는 함수 자체를 넣어야하기에 onAddMemo로 넣어주지만,
                    // 지금 onSubmit에서 ()=>{} 안에 작성되고 있기에
                    // onAddMemo()로 함수를 실행해야한다.
                    onAddMemo();
                }
            }
        >
            <input type="text" placeholder='메모를 입력하세요' value={inputMemo}
                onChange={(e)=>(setInputMemo(e.target.value))}
                // form 사용 시 enter만 치면 자동으로 버튼 submit 작동
            />
            <button type='submit'>form으로 메모 추가</button>
        </form>
    </div>
  )
}
