import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const register = (username, password, email, role_id = 3) => {
  console.log(`Sending register request with username: ${username}, email: ${email}, role_id: ${role_id}`);
  return axios.post(`${API_URL}/register`, { username, password, email, role_id })
    .then(response => {
      console.log('Registration response:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error during registration:', error.response ? error.response.data : error.message);
      throw error;
    });
};

const login = (username, password) => {
  console.log(`Sending login request with username: ${username}`);
  return axios.post(`${API_URL}/login`, { username, password })
    .then(response => {
      console.log('Login response:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error during login:', error.response ? error.response.data : error.message);
      throw error;
    });
};

const logout = () => {
  console.log('Logging out');
  localStorage.removeItem('user');
};

const resetPassword = (email) => {
  console.log(`Sending reset password request for email: ${email}`);
  return axios.post(`${API_URL}/reset-password`, { email })
    .then(response => {
      console.log('Reset password response:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error during password reset:', error.response ? error.response.data : error.message);
      throw error;
    });
};

const setNewPassword = (token, newPassword) => {
  console.log('Sending set new password request');
  return axios.post(`${API_URL}/set-new-password`, { token, newPassword })
    .then(response => {
      console.log('Set new password response:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error during setting new password:', error.response ? error.response.data : error.message);
      throw error;
    });
};

const authService = {
  register,
  login,
  logout,
  resetPassword,
  setNewPassword
};

export default authService;
