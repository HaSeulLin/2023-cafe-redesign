import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const flowerSlice = createSlice({
    name : "flower",
    initialState : {
        name : "꽃이름",
        image : "꽃이미지",
        explain : "꽃설명"
    },
    reducers : {
        flowerToday : (state, action) => {
            state.flower = action.payload
        }
    }
})

export const flowerTodayAPI = () => async (dispatch) => {
//      'https://apis.data.go.kr/1390804/NihhsTodayFlowerInfo01/selectTodayFlower01?ServiceKey=VyEN14OLP3JKHbY6RknSg2C1BenGArQHIExxMYn%2BJ%2B%2FWnDLSLFGMI2x3qpdomtf7eTYtLZQcJuxr6zfUMra%2Bjw%3D%3D'
    try {
        const res = await axios.get(
            'https://apis.data.go.kr/1390804/NihhsTodayFlowerInfo01/selectTodayFlower01?ServiceKey=VyEN14OLP3JKHbY6RknSg2C1BenGArQHIExxMYn%2BJ%2B%2FWnDLSLFGMI2x3qpdomtf7eTYtLZQcJuxr6zfUMra%2Bjw%3D%3D'
        )
        console.log(res.data)
    }
    catch (e) {
        console.log(e)
    }
    dispatch(flowerToday())
}

export const { flowerToday } = flowerSlice.actions;
export default flowerSlice.reducer;