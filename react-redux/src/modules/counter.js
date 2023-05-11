// counter의 공간은 리덕스를 사용하면서
// 액션과 리듀서 함수를 작성하는 공간
// 액션 : 어떤 내용을 실행할지 정함
// 리듀서 함수 : 액션의 타입을 받아와서 실행(변화)

// counter에서 할 일
// 1. 값을 1씩 증가
// 2. 값을 1씩 감소
// state : 0
// action : "INCREASE", "DECREASE"
// >> 액션 생성 함수로 만들어서 사용 (return 객체!)

export const increase = () => (
    { type : "INCREASE" }
);

// state의 기본값 작성
const initialState = 0;

// 액션과 state를 받아와서 state를 바꾸는 리듀서 함수
// 매개변수에 =을 통해서 값을 미리 넣어둘 수 있다
function counter(state=initialState, action) {
    // switch를 통해 액션의 타입 확인
    switch (action.type) {
        case "INCREASE" :
            return state+1;
        default :
            return state;
    }
}

export default counter;