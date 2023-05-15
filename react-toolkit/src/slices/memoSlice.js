// createSlice를 통해서 이름, 초기값, 리듀서 작성
// action과 reducer export 

import { createSlice } from "@reduxjs/toolkit";

let id = 2;

// memoSlice에서 배열을 어떻게 업데이트 하는지
export const memoSlice = createSlice({
    name : "memo",
    initialState : [
        {
            id : 1,
            text : "메모입니다",
            date : "2023-05-15"
        }
    ],
    reducers : {
        // 이전 리덕스에서 쓰는 방법
        addMemoRedux : (state, action)=>{
            // 1. 새로운 메모
            const newMemo = {
                ...action.payload,
                id : id
            }
            id++
            // 2. 새로운 메모가 있는 배열 생성
            const newMemoList = state.concat(newMemo);
            // 3. return 새로운 배열 전달
            return newMemoList;
        },
        // 리덕스 툴킷에서 쓰는 방법
        // 값을 직접 수정해서 쓰는 방법
        addMemoToolkit : (state, action)=>{
            // 배열의 메소드 중 push() 사용
            // push()는 원본 배열에 값을 추가해서 사용한다
            const newMemo = {
                ...action.payload,
                id : id
            }
            id++
            state.push(newMemo)
        },
        // 반드시 toolkit에서 제공되는 형태로 해야할 필요는 없다
        // 배열에 관한 값을 사용할 때는 익숙한 메소드 사용 권장
        deleteMemoRedux : (state, action) => {
            const deleteMemoList = state.filter((memo)=>(memo.id != action.payload));
            return deleteMemoList;
        },
        // state의 값을 바로 수정하기 위해
        deleteMemoToolkit : (state, action) => {
            // 배열의 메소드 중 splice() 사용
            // splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경.
            // action.payload에서 memolist의 인덱스값 가져옴
            // 배열.splice(삭제를 시작할 배열의 인덱스 값, 몇 개를 삭제하는가)
            // ex) splice(3, 1) >> 배열의 인덱스 3부터 1개의 요소 삭제.
            state.splice(action.payload, 1)
        }
    }
})

export const { addMemoRedux, addMemoToolkit, deleteMemoRedux, deleteMemoToolkit } = memoSlice.actions;
export default memoSlice.reducer