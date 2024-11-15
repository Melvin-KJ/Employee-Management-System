import axios from 'axios';

const API_URL = 'http://localhost:3000/employees';
//helper functions to reuse in components for handling api calls
export const fetchEmployee = () => axios.get(API_URL);
export const addEmployee = (employee) => axios.post(API_URL, employee);
export const updateEmployee = (id, employee) =>
  axios.put(`${API_URL}/${id}`, employee);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/${id}`);
