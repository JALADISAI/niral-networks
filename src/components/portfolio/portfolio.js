
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/portfolio.css';
const Portfolio = () => {
  const [data, setData] = useState([]);
  const Navigate = useNavigate();

  const handleChangeLog = () => {
    Navigate('/')
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      <div className='heading-wrapper'>
        <h2>WELCOME TO THE PORTFOLIO PAGE</h2>
        <button className='btn' onClick={handleChangeLog}>LOGOUT</button>
      </div>
      <table className='sub'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Portfolio;
