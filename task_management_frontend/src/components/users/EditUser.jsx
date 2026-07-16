import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getUserDetails, updateUserById } from '../../api/api'

const EditUser = () => {
  const {ID} = useParams()
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

  async function handleUpdateUser(e){
    e.preventDefault()
    const res = await updateUserById(ID,formData) 
    if(res.data.success){
    alert(res.data.message)
    navigate('/user_list')
    }
    else{
      alert("Not updated")
    }
  }

  async function fetchDataOfUser() {
    const res = await getUserDetails(ID)
    setFormData(res.data.user)
  }

  useEffect(()=>{
    fetchDataOfUser()
  },[ID])

  return (
    <div className="container w-50 mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h2>Update New User</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleUpdateUser}>
                <div className="mb-3">
                  <label className="form-label">Update Name</label>
                  <input type="text" className="form-control" 
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Update Email</label>
                  <input type="email" className="form-control" 
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Update Contact Number</label>
                  <input type="text" className="form-control" 
                  name='contact_number'
                  value={formData.contact_number}
                  onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Update Task</label>

                  <select name="task_id" id=""
                  onChange={handleChange}
                  >
                    <option value="" name='task_id'>{formData.task_id}</option>
                    
                  </select>
                </div>
                
                <button type="submit" className="btn btn-primary">Update User</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditUser
