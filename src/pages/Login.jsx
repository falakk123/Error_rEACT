import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const demo = () => console.log(val)
  const handleSubmit = (e) => {
    e.preventDefault();
   
    const newEntry = {username: username, password: password };

    setAllEntry([...allEntry, newEntry])
    console.log(newEntry);
  };

  return (
    <div data-bs-theme="dark" class="shadow-lg card bg-dark  my-5 container">
    <div class="card-body p-5 card-body">
      <div class="fs-4 fw-bold mb-4 card-title"><h1 className='text-center'>LogIn</h1></div>
    <Form action='' onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          id='Enter username'
          autoComplete='off'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
       </Form.Group>
       <div class="mb-3">
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          value={password}
          id='password'
          autoComplete='off'
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      </div>
      <div className='d-flex justify-content-center align-items-center my-3'>
      <Button variant="secondary p-3" type="submit">
       Login
      </Button>
      </div>
{/* 
      <Button variant="primary" type="SingUp">
      <Link className='mx-2 btn btn-dark' to="/singup">Singup</Link>
      </Button>
       */}
    </Form>
    </div>
    </div>
  );
};

export default Login;
