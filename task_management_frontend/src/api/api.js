import axios from 'axios';

const axiosInstance = axios.create({
    baseURL : 'http://127.0.0.1:8000'
})

export const addNewTask = (data)=>{
    return axiosInstance.post('/api/tasks/create/',data)
}

export const getAllTasks = () => {
    return axiosInstance.get('/api/tasks/getAllTasks/') 
}

export const getTaskDetails = (id) => {
    return axiosInstance.get(`/api/tasks/get_task_by_id/${id}/`) 
}

export const deleteTaskById = (id) => {
    return axiosInstance.delete(`/api/tasks/delete_task/${id}/`) 
}

export const updateTaskById = (id, data) => {
    return axiosInstance.put(`/api/tasks/update_task/${id}/`, data) 
}





export const addNewUser = (data) => {
    return axiosInstance.post('/api/users/createUser/', data) 
}

export const getAllUser = () => {
    return axiosInstance.get('/api/users/getAllUsers/') 
}

export const getUserDetails = (id) => {
    return axiosInstance.get(`/api/users/getUserById/${id}/`) 
}

export const deleteUserById = (id) => {
    return axiosInstance.delete(`/api/users/deleteUser/${id}/`) 
}

export const updateUserById = (id, data) => {
    return axiosInstance.put(`/api/users/updateUser/${id}/`, data) 
}

export default axiosInstance