import { createSlice } from "@reduxjs/toolkit";


// 날씨API를 통해서 값을 가져옴
// loading은 fetch API를 사용할 때 걸리는 시간 동안 true
// startLoading, endLoading, getWeather(가져온 값을 할당)

// >> 값이 바로바로 바뀌는 것은 reducer에 작성. (비동기)
// >> 값을 받아오는 경우(시간필요) thunk로. 
export const weatherSlice = createSlice({
    name : "weather",
    initialState : {
        weather : null,
        loading : false
    },
    reducers : {
        startLoading : (state) => {
            state.loading = true
        },
        endLoading : (state) => {
            state.loading = false
        },
        getWeather : (state, action) => {
            //payload : 날씨API에서 받아온 날씨값
            state.weather = action.payload;
        }
    }
})

// thunk를 사용한 액션생성함수 작성
export const getWeatherAPI = () => async (dispatch) => {
    dispatch(startLoading());

    try {
        // try-cathc 구문을 통해서
        // 오류가 날 확률이 있는 코드를 try에 넣고
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=72041b75f24ac46049485963e6b23fc9&lang=kr');
        const data = await response.json();
        console.log(data.weather[0].description)
        dispatch(getWeather(data.weather[0].description));
    }
    catch {
        // 오류가 났을 때 실행할 내용을 아래에 작성
        dispatch(getWeather('없음'))
    }

    dispatch(endLoading());
}

export const { startLoading, endLoading, getWeather } = weatherSlice.actions;
export default weatherSlice.reducer;