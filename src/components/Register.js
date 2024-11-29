import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

  

function Register() {
  const [employee, setEmployee] = useState({ name: '', position: '', about: '', joining_date: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
    
    navigate('/list');
  };

  return (
    <div className="register">
      <h2>Employee Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={employee.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Position:</label>
          <input type="text" name="position" value={employee.position} onChange={handleChange} required />
        </div>
        <div>
          <label>About:</label>
          <textarea name="about" value={employee.about} onChange={handleChange} required></textarea>
        </div>
        <div>
          <label>Joining Date:</label>
          <input type="date" name="joining_date" value={employee.joining_date} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
