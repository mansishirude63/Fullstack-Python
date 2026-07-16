import React from 'react'
import { Link } from 'react-router-dom'

const dashboard = () => {
    return (
        <div className="container">

            <h1 className="text-center text-primary display-5 mb-4"> Task Management Dashboard </h1>
            
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card shadow text-center">
                            <div className="card-body">
                                <h3>Task Module</h3>
                                <p>Create , Update , Delete , View all tasks</p>
                                <Link to='/task_list' className='btn btn-primary'>View Tasks</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow text-center">
                            <div className="card-body">
                                <h3>User Module</h3>
                                <p>Create , Update , Delete , View all users</p>
                                <Link to='/user_list' className='btn btn-primary'>View Users</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default dashboard
