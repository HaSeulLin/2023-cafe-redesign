import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather } from '../modules/weatherThunk';

export default function WeatherThunk() {
  const weather = useSelector((state)=>(state.weatherThunk));
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getWeather())
  },[])

  return (
    <div>
      <h1>WeatherThunk</h1>
      <p>{weather.loading ? "로딩중입니다" : "로딩중이 아닙니다"}</p>
      <p>{weather.weather && weather.weather}</p>
    </div>
  )
}
