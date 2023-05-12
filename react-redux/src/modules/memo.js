// 액션함수, 리듀서 작성


// memo.js
// 1. 메모 추가
// 2. 메모 수정
// 3. 메모 삭제
// state : [](여러개) / text, date (내용)
// action : "ADD_MEMO", "MODIFTY_MEMO", "DELETE_MEMO"

// state의 초기값
const initialState = [
    {
        id : 1,
        text : "첫번째 메모입니다",
        date : "2023-05-11"
    },
    {
        id : 2,
        text : "두번째 메모입니다",
        date : "2023-05-12"
    }
];
// 내부적으로 사용하는 변수 id 설정
let id = 3;

// 액션 생성 함수
// addMemo는 메모의 값을 추가하기 위해 함수를 통해 memo의 값을 가져옴
// : {text, date}을 가져와야 함 >> dispatch 사용 때 확인!
export const addMemo = (memo) => (
    { type : "ADD_MEMO", payload : memo }
);
export const deleteMemo = (id) => (
    // id는 메모의 id 값을 가져옴
    { type : "DELETE_MEMO", payload : id }
);

// 리듀서
function memo(state=initialState, action) {
    switch (action.type) {
        case "ADD_MEMO" :
//            return [
//                ...state,
//                {   }
//            ]
// 이런 식으로 배열 추가해도 OK
            // 새로운 메모 작성,
            const newMemo = {
                ...action.payload,
                id : id
            }
            id++
            // 새로운 메모 리스트 만들어 (concat 사용) return
            const newMemoList = state.concat(newMemo);
            return newMemoList;
        case "DELETE_MEMO" :
            // filter를 통해서 id를 제외하고 새로운 배열
            const deleteMemoList = state.filter((memo)=>(memo.id !== action.payload));
            return deleteMemoList;
        default :
        return state;
    }
}

export default memo;