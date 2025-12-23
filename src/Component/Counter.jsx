import React, { useState } from 'react'

const Counter = (p) => {
    let [count, setCount] = useState(0)

    let incr = () => {
        setCount(count + p.step)
    }
    let decr = () => {
        if (count > 0) {
            setCount(count - p.step)
        }
    }
    let rst = () => {
        setCount(0)
    }
    return (
        <div className='counter'>
            <h1>Counter: {count}</h1>
            <div className="btns">
                <button id='btn3' onClick={incr}>Increment</button>
                <button id='btn2' onClick={rst}>Reset</button>
                <button id='btn1' onClick={decr}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter
