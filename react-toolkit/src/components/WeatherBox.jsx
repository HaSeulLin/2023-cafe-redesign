import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeatherAPI } from '../slices/weatherSlice';

export default function WeatherBox() {

    const weather = useSelector((state)=>(state.weather));
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getWeatherAPI())
    }, [])

  return (
    <div>
        <h1>Weather</h1>
        {
            weather.loading ? 
            <h3>로딩중입니다</h3>
            : <h3>로딩 완료</h3>
        }
        <h3>{weather.weather && weather.weather}</h3>
    </div>
  )
}
