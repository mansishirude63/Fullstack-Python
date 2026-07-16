import React, { useEffect, useState } from 'react'
import { getAllUser, deleteUserById } from '../../api/api'
import { Link } from 'react-router-dom'


const UserList = () => {
  const [users, setUsers] = useState()

  async function handleDelete(id) {
    const confirmUserDelete = window.confirm("Are you sure you want to delete this user ??")
    if(!confirmUserDelete){
      return
    }
   const res = await deleteUserById(id)
   if(res.data.success){
    alert(res.data.message)
    // navigate('/UserList')
    fetchData()
   }
   else{
    alert("User not deleted")
   }
  }

  async function fetchData() {
    const res = await getAllUser()
    setUsers(res.data.users)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container">
      <div className="row">
        {
          users?.map((user, i) => (
            <div className="col-md-3 col-lg-3" key={i}>
              <div className="card mb-4">
                <div className="card-header">{user.name}</div>

                <div className="card-body">
                  <p>Email : <i>{user.email}</i></p>
                  <p>Contact Number : <i>{user.contact_number}</i></p>
                  <p>
                    <Link to={`/edit_user/${user.id}`} className='btn btn-success me-2'>Edit</Link>
                    <button className='btn btn-danger' onClick={()=>handleDelete(user.id)}>DELETE</button>
                  </p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default UserList
