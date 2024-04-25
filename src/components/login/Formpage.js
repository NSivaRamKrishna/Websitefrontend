import * as React from 'react';
import { navigate } from 'react-router-dom'; 
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const defaultTheme = createTheme();

const FormPage = () => {
    const navigate = useNavigate(); 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const requestData = {
      title: formData.get('title'),
      date: formData.get('date'), 
      file: formData.get('document'), 
    };
  
    try {
      const response = await axios.post('http://localhost:8888/api/updates/add-event', requestData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleLogout = () => {
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sports files Upload for Notifications
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title" 
              autoComplete="title"
              autoFocus
            />
            <br />
            <br />
            <Typography component='h5' variant='h5'>
              Date : &nbsp;&nbsp;
              <input type="date" id='date' name="date"></input>
            </Typography>
            <br />
            <Typography component="h5" variant="h5">
              Upload Document :&nbsp;&nbsp;
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload file
                <VisuallyHiddenInput type="file" name="document" /> {/* Make sure the name matches the key in FormData */}
              </Button>
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SUBMIT
            </Button>
            <Button
              onClick={handleLogout}
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 2 }}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default FormPage;
