import React from 'react';
import { Link } from 'react-router-dom';
import { deleteEmployee } from '../services/api';

function EmployeeTable({ employees, onDelete }) {
  const handleDelete = async (id) => {
    try {
      // Delete the employee from the API
      await deleteEmployee(id);
      alert('Employee deleted successfully!');
      //update the employee list in  parent component's state
      onDelete(id);
    } catch (error) {
      console.error('Error deleting employee', error);
    }
  };

  return (
    <table className='table table-striped table-bordered'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee,index) => (
          <tr key={employee.id}>
            <td>{index+1}</td>
            <td>{employee.username}</td>
            <td>{employee.email}</td>
            <td>{employee.status}</td>
            <td>
              {/* Edit button */}
              <Link className='me-2' to={`/edit/${employee.id}`}>
                <button className="btn btn-primary btn-sm">Edit</button>
              </Link>
              {/* Delete button */}
              <button
                onClick={() => handleDelete(employee.id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
