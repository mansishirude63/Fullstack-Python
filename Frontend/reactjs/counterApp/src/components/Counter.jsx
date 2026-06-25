import React, {useState} from 'react'

const Counter = () => {

    const [count, setCount] = userState(100)
    // const [themer, setTheme] = userState('Light')

    function handleIncrement () {
        setCount(count=> count+1)
        console.log(count, "Count")
    }


  return (
    <>
    <div className="container"></div>
    <h1 className="text-center"> Counter </h1>
    <h3 className="text-center"> Count = {count} </h3>
    <div className="container text-center">
    <button className="btn btn-primary me-2 onClick{ () => handleIncrement()}"> + </button>
    <button className="btn btn-primary onClick{ () => setCount(prev=>prev-1)}"> - </button>
    </div>
    </>

)
}

export default Counter
