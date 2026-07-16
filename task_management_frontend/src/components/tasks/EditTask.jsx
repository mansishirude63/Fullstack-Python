import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {getTaskDetails, updateTaskById} from '../../api/api'

const EditTask = () => {
  const [taskDetails, setTaskDetails] = useState()
  const {ID} = useParams()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title:'',
    description:'',
    status:'',
    start_date:'',
    end_date:''
  })

  function handleChange(e){
    // e.preventDefault()
    // settaskDetails({
    //   ...formData, [e.target.name]: e.target.value,
    // });

    const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
  }

  async function handleUpdateTask(e){
    e.preventDefault()
    console.log(formData)
    const res = await updateTaskById(ID, formData)
    if(res.data.success){
      alert(res.data.message)
      navigate('/taskList')
    }else{
      alert("Task not updated")
    }
  }



   async function fetchData(){
      const res = await getTaskDetails(ID)
      if(res.data.success){
        // settaskDetails(res.data.task)
        setFormData(res.data.task)
      }
    }
  



  useEffect(()=>{
    fetchData()
  },[ID])





  return (
    <div className="container w-50">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h2>Update New Task</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleUpdateTask}>
                <div className="mb-3">
                  <label className="form-label">Update Title</label>
                  <input type="text" className="form-control"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-3">
                  <label className="form-label">Update Description</label>
                  <input type="text" className="form-control" 
                  name="description"
                  value={formData.description}
                    onChange={handleChange}

                  />
                </div>
                <div class="mb-3">
                  <label className="form-label">Update Status</label>
                  <input type="text" className="form-control" 
                  name="status"
                  value={formData.status}
                    onChange={handleChange}

                  />
                </div>
                <div class="mb-3">
                  <label className="form-label">Update Start Date</label>
                  <input type="date" className="form-control" 
                  name="startDate"
                  value={formData.start_date}
                    onChange={handleChange}

                  />
                </div>
                <div class="mb-3">
                  <label className="form-label">Update End Date</label>
                  <input type="date" className="form-control" 
                  name="endDate"
                  value={formData.end_date}
                    onChange={handleChange}

                  />
                </div>
                <button type="submit" class="btn btn-primary">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditTask