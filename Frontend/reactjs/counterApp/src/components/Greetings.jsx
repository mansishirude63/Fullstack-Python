import React, { useState } from 'react'

const Greetings = () => {

    const [user, setUser] = useState()
    const [message, setMessage] = useState("Welcome USER")

    function handleSubmit() {
        setMessage(`Welcome ${user}`)
    }

    return (
        <>
            <h1 className='text-center'>Greetings</h1>
            <div className="container d-flex justify-content-center mt-4">
                <input type="text" onChange={(e) => setUser(e.target.value)} />
                <button onClick={() => handleSubmit()} className='bg-dark border-0 text-light'>Submit</button>
            </div>
            <div className="container bg-warning text-danger p-4 mt-4 mb-4 rounded-5">
                <h2 >{message}</h2>
                <p>Hello! I hope you are having a fantastic day.</p>
            </div>
        </>
    )
}

export default Greetings