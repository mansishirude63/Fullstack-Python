import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ToDos = () => {
    const [todos, setToDos] = useState([])

    async function fetchData() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        console.log(res.data)
        setToDos(res.data)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <h1 className='ms-5 mt-5'>ToDos</h1>
            <ul>
                {
                    todos.map((td, i) => (
                        <li key={i}
                            className={` ${td.completed ? 'text-success' : 'text-danger'}`}
                        >
                            {td.title}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default ToDos