import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEmployee } from '../services/api';

function Add() {
  const [employee, setEmployee] = useState({
    username: '',
    email: '',
    status: 'active',
  });

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setEmployee({ ...employee, username: e.target.value });
  };

  const handleEmailChange = (e) => {
    setEmployee({ ...employee, email: e.target.value });
  };

  const handleStatusChange = (e) => {
    setEmployee({ ...employee, status: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEmployee(employee);
      alert('Employee added successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error adding employee', error);
    }
  };

  return (
    <div className="container mt-4 text-light bg-success p-4">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            value={employee.username}
            onChange={handleUsernameChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleEmailChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            name="status"
            className="form-select"
            value={employee.status}
            onChange={handleStatusChange}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary me-2">
          Add
        </button>
        <button className="btn btn-dark" onClick={() => navigate('/')}>
          Back
        </button>
      </form>
    </div>
  );
}

export default Add;
