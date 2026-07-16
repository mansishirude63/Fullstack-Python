import React, { useState } from 'react'
import { addNewTask } from '../../api/api.js'

const CreateTask = () => {
    
  const [title , setTitle ] = useState('')
  const [description , setDescription ] = useState('')
  const [start_date , setStartDate ] = useState('')
  const [end_date , setEndDate ] = useState('')

 async function handleSubmit (e){
    e.preventDefault ()
    const payload = {
      title : title,
      description:description,
      start_date:start_date,
      end_date:end_date
    }
    // console.log(payload)

    const res = await addNewTask(payload)
    if(res.data.success){
      alert("Task added successfully")
      title = '',
      description = '',
      start_date = '',
      end_date = ''
    }
    else{
      alert("Not created")
    }
  }
  

  return (

    <div className="container w-50 mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h2>Add New Task</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Add Title</label>
                  <input type="text" className="form-control"
                  onChange = {(e)=>setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Add Description</label>
                  <input type="text" className="form-control" 
                  onChange = {(e)=>setDescription(e.target.value)}
                  />
                </div>
                {/* <div className="mb-3">
                  <label className="form-label">Add Status</label>
                  <input type="text" className="form-control" />
                </div> */}
                <div className="mb-3">
                  <label className="form-label">Start Date</label>
                  <input type="date" className="form-control"  
                   onChange = {(e)=>setStartDate(e.target.value)}
                   />
                </div>
                <div className="mb-3">
                  <label className="form-label">End Date</label>
                  <input type="date" className="form-control" 
                  onChange = {(e)=>setEndDate(e.target.value)}
                  />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CreateTask
