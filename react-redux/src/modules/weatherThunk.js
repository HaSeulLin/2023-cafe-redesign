// 액션함수, 리듀서 작성

// 날씨 API를 사용하여 외부에서 값을 가져옴
// 외부에서 값을 가져올 때는 시간이 걸리기 때문에 비동기로 가져옴
// state : 날씨, loading
// aciton : startloading(true), endloading(false), getWeather


// 초기 state값
const initialState = {
    wearther : null,
    loading : false
}

// 액션 생성 함수 >> thunk
// thunk를 사용하면 async를 붙여서 비동기 함수로 쓸 수 있다
// async가 붙은 함수는 따로 계속 실행이 되고 있다
export const getWeather = () => async (next) => {
    // getWeather 액션함수 시작 : loading true
    next({type:"STARTLOADING"})

    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=72041b75f24ac46049485963e6b23fc9&lang=kr');
    const data = await response.json();
    console.log(data)
    console.log(data.weather[0].description)
    // next를 이용하여 리듀서에 전달할 액션객체 작성
    next({type:"GET_WEATHER", payload : data.weather[0].description})

    // getWeather 액션함수 종료 : loading false
    next({type:"ENDLOADING"})
}

// 리듀서
function weatherThunk (state=initialState, action) {
    switch(action.type) {
        case "GET_WEATHER" :
            // 주소를 통해서 값 가져옴
            // 비동기로 값을 가져오기 때문에(시간차) 값이 들어가지 않음
            // >> action 함수를 thunk로 만들어서(비동기함수) 사용한다
            return {
                ...state,
                weather : action.payload
            }
        case "STARTLOADING" :
            return {
                ...state,
                loading : true
            };
        case "ENDLOADING" :
            return {
                ...state,
                loading : false
            };
        default :
            return state;
    }
}

export default weatherThunk;