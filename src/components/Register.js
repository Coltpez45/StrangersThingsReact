import React, { useState } from 'react';
import { registerUser } from '../ajax-requests';
import { Link } from 'react-router-dom';


function Register({ setToken, setProfile }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  
  
  async function handleSubmit(event) {
    event.preventDefault();
    const user = {username, password, location};
    /*
      {
        username: 'username value',
        password: 'password value'
      }
    */
   
    const results = await registerUser(user);
    
    if (results.success) {
      setToken(results.data.token);
      window.localStorage.setItem("token", results.data.token);
      alert('Your account was created!');
      
    }else {
      alert('ERROR! Username Already in Use. Please choose a different Username.');
    }
    
  }

  
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        placeholder='Enter Username'
        onChange={(event) => setUsername(event.target.value)}
      />
      <input 
        type='password'
        placeholder='Enter Password'
        onChange={(event) => setPassword(event.target.value)}
      />
      <input
        type='text'
        placeholder='Enter Location'
        onChange={(event) => setLocation(event.target.value)}
      />  

      <button type='submit'>Submit</button>
    </form>
  )
}

export default Register;
