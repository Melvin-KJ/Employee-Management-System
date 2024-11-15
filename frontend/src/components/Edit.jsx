import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchEmployee, updateEmployee } from '../services/api';

function Edit() {
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    username: '',
    email: '',
    status: 'active',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const getEmployee = async () => {
      try {
        const response = await fetchEmployee(id);
        setEmployee(response.data);
      } catch (error) {
        console.error('Error fetching employee details', error);
      }
    };
    if(id){
      getEmployee();
    }
    
  }, [id]);

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
      await updateEmployee(id, employee);
      alert('Employee added successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error updating employee', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Employee</h2>
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
        <button type="submit" className="btn btn-success me-2">
          Update
        </button>
        <button className='btn btn-dark' onClick={()=>navigate('/')}>Back</button>
      </form>
    </div>
  );
}

export default Edit;
