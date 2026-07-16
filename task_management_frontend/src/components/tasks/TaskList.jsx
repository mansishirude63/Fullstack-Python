import React, { useEffect, useState } from 'react'
import { getAllTasks } from '../../api/api.js'
import { Link } from 'react-router-dom'


const TaskList = () => {

  const [tasks, setTasks] = useState([[]])

  async function fetchData() {
    const res = await getAllTasks()
    if (res.data.success) {
      setTasks(res.data.tasks)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container mt-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks?.map((tasks, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>
                  <Link to={`/task_details/${tasks.id}`}>
                    {tasks.title}
                  </Link>
                </td>
                <td>{tasks.description}</td>
                <td>{tasks.status}</td>
                <td>{tasks.start_date}</td>
                <td>{tasks.end_date}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default TaskList
