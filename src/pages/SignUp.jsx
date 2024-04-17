import React, { useState } from 'react';
import { useUser } from '../UserProvider';
import { Button, TextField } from '@mui/material';
import Register from '@mui/icons-material/AppRegistration';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function SignUp(props) {

  const { username, setUsername } = useUser();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();  

  const validatePassword = () => {
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/;
    return regex.test(password);
  };

  const btnCreateUser = () => {
    if (!validatePassword()) {
      setError('Password must be 8-12 characters long, contain at least one capital letter, and at least one number.');
      return;
    }

    let storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    let newUser = {
      username: username,
      password: password
    };

    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    console.log(newUser);
    
    if (props.onCreateUser) {
      props.onCreateUser(newUser);
    }
  
    setIsVisible(true);
    setUsername(username);
    
    setTimeout(() => {
      setIsVisible(false);
      navigate('/SignIn');
    }, 2000);
};
  
  return (
    <div className='formCard'>
      {isVisible && <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">{username}'s registration was successful.</Alert>}
      {error && <Alert severity="error">{error}</Alert>}
      <h1>Sign up</h1>
      <TextField onChange={(event) => setUsername(event.target.value)} id="outlined-basic" label="Username" variant='outlined' InputLabelProps={{ style: { color: '#fff' } }} InputProps={{ style: { color: '#fff' } }}/> <hr />
      <TextField onChange={(event) => setPassword(event.target.value)} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" InputLabelProps={{ style: { color: '#fff' } }} InputProps={{ style: { color: '#fff' } }}/> <hr />
      <Button onClick={btnCreateUser} variant="contained" endIcon={<Register />}>Sign up</Button>
    </div>
  );
}
