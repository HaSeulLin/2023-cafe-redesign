import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { flowerTodayAPI } from '../slices/flowerSlice';


export default function FlowerBox() {
    const flower = useSelector((state)=>(state.flower));
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(flowerTodayAPI())
    }, [])

  return (
    <div>
        <h1>Flower</h1>
        <h3>{flower.name}</h3>
    </div>
    )
}