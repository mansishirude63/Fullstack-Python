import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import CreateTask from './components/tasks/CreateTask'
import EditTask from './components/tasks/EditTask'
import TaskDetails from './components/tasks/TaskDetails'
import TaskList from './components/tasks/TaskList'
import CreateUser from './components/users/CreateUser'
import EditUser from './components/users/EditUser'
import UserDetails from './components/users/UserDetails'
import UserList from './components/users/UserList'
import Navbar from './components/Navbar'





function App() {
  
  return (
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path = '/' element = {<Dashboard />} ></Route>

        <Route path = '/create_task' element = {<CreateTask />} ></Route>
        <Route path = '/task_list' element = {<TaskList />} ></Route>
        <Route path = '/task_details/:ID' element = {<TaskDetails />} ></Route>
        <Route path = '/edit_task/:ID' element = {<EditTask />} ></Route>


        <Route path = '/create_user' element = {<CreateUser/>}></Route>
        <Route path = '/user_list' element = {<UserList/>}></Route>
        <Route path = '/user_details/:ID' element = {<UserDetails/>}></Route>
        <Route path = '/edit_user/:ID' element = {<EditUser/>}></Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App
