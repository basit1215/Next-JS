"use client"


import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament } from '../redux/reducers/counterSlice'

const Counter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <h2>Counter {count}</h2>
            <button onClick={() => dispatch(increament())}>Increament</button>
            <button onClick={() => dispatch(decreament())}>Decreament</button>
        </>
    )
}

export default Counter