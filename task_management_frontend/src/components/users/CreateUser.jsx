import React, {useState,useEffect} from 'react'
import {getAllTasks, addNewUser } from '../../api/api'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
  const [tasks, setTasks] = useState([[]])
  const [formData, setFormData] = useState({
    "name":"",
    "email":"",
    "contact_number":"",
    "task_id":0
  })

  const navigate = useNavigate()


  function handleChange(e){
    const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
  }

  async function handleSubmitUser(e) {
    e.preventDefault()
    const res = await addNewUser(formData)
    if(res.data.success){
      alert(res.data.message)
      navigate('/user_list')
    }
    else{
      alert("User not added")
    }
  }
  


    async function fetchTaskData() {
      const res = await getAllTasks()
      if (res.data.success) {
        setTasks(res.data.tasks)
      }
    }
  


    useEffect(() => {
      fetchTaskData()
    }, [])


  return (
    
     <div className="container w-50 mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h2>Add New User</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmitUser}>
                <div className="mb-3">
                  <label className="form-label">Add Name</label>
                  <input type="text" className="form-control" 
                  name='name'
                  onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Add Email</label>
                  <input type="email" className="form-control" 
                  name='email'
                  onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Add Contact Number</label>
                  <input type="text" className="form-control" 
                  name='contact_number'
                  onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  {/* <label className="form-label">Select Task</label> */}

                  <select name="task_id" id=""
                  onChange={handleChange}
                  >
                    <option value="">Select Task</option>
                      {
                        tasks?.map((t,i)=>(
                          <option key={i} value={t.id} name='task_id'>{t.title}</option>
                        ))
                      }
                  </select>
                </div>
                
                <button type="submit" className="btn btn-primary">Create User</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CreateUser
