import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getTaskDetails, deleteTaskById } from '../../api/api'


const TaskDetails = () => {

  const [taskDetails, setTaskDetails] = useState()
  const { ID } = useParams()
  const navigate = useNavigate()

  async function fetchData() {
    const res = await getTaskDetails(ID)
    if(res.data.success) {
      setTaskDetails(res.data.task)
    }
  }

  async function handleDelete() {
    const confirmationDelete = window.confirm("Are youn sure you want to delete this task??")
    if (!confirmationDelete) {
      return
    }

    try {
      const res = await deleteTaskById(ID)
      if(res.data.success) {
        alert(res.data.message)
        navigate('/task_list')
      }
    }
    catch(error) {
      console.log(error)
      alert("Task not deleted")
    }
  }

  useEffect(() => {
    fetchData()
  }, [ID])

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>{taskDetails?.title}</h3>
            </div>
            <div className="card-body">
              <p>{taskDetails?.description}</p>
              <p>{taskDetails?.status}</p>
              <p>
                <Link to={`/edit_task/${taskDetails?.id}`} className="btn btn-success me-3"> Edit </Link>
                <button className="btn btn-danger" onClick={handleDelete}> Delete </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskDetails
