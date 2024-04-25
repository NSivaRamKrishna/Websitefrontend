// Login.js
import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Card, CardContent, CardActions } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8888/api/admins/login', {
        username,
        password
      });
      if (response.status === 200) {
        navigate('/formpage'); 
      } else {
        setError('An error occurred during login.');
      }
    } catch (err) {
      setError(err.response.data.message || 'An error occurred during login.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Login;
