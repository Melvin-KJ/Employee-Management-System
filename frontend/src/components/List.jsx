import React, { useEffect, useState } from 'react';
import { fetchEmployee } from '../services/api';
import EmployeeTable from './EmployeeTable';
import { Link } from 'react-router-dom';

function List() {
  const [employees, setEmployees] = useState([]);

  //this effect runs onces when the component is mounted
  useEffect(() => {
    //Fetch Employees from the API
    const getEmployee = async () => {
      try {
        const response = await fetchEmployee();
        //update the state with employee data
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees', error);
      }
    };
    getEmployee();
  }, []);

  //Function to remove an employee from the state
  const handleDelete = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-4 bg-success text-light">
      <h2 className="mb-4 mt-4 ">Employee List</h2>
      <Link to="/add">
      <button className='btn btn-dark mb-2'>Add Employee</button></Link>
      <EmployeeTable employees={employees} onDelete={handleDelete}/>
    </div>
  );
}

export default List;
