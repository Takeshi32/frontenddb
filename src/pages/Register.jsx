import React, { useState } from 'react';
import authService from '../services/authService';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const roleId = 3; // Asumiendo que 3 es el rol de clientes

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log(`Registering with username: ${username}, email: ${email}, role_id: ${roleId}`);
      await authService.register(username, password, email, roleId);
      alert('Registration successful!');
    } catch (error) {
      console.error('Error registering user:', error);
      alert(`Error registering user: ${error.response ? error.response.data.message : error.message}`);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
