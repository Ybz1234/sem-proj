import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function SignIn(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const displayError = (errorMessage) => {
    setLoginError(errorMessage);
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, 3000);
  };

  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const matchedUser = storedUsers.find(user => user.username === username && user.password === password);
    
    if (matchedUser) {
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('username', username); // Store the username in local storage upon successful login
      navigate('/Cities');
    } else {
      displayError('Invalid username or password. Please try again.');
    }
  };
  

  return (
    <div className='formCard'>
      <h1>Sign in</h1>
      <TextField value={username} onChange={(e) => setUsername(e.target.value)} id="outlined-basic" label="Username" variant="outlined" InputLabelProps={{ style: { color: '#fff' } }} InputProps={{ style: { color: '#fff' } }}/> <hr />
      <TextField value={password} onChange={(e) => setPassword(e.target.value)} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" InputLabelProps={{ style: { color: '#fff' } }} InputProps={{ style: { color: '#fff' } }}/> <hr />
      <Button onClick={handleLogin} variant="contained" endIcon={<SendIcon />}>Login</Button> <hr />
      <Button variant="contained" endIcon={<SendIcon />} onClick={() => navigate('/SignUp')}>New? Register</Button>
      {showError && <Alert variant="filled" severity="error">{loginError}</Alert>}    </div>
  );
}
