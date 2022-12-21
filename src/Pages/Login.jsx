import React, { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../providers/AuthProvider';
import { MainLayout } from '../layouts/MainLayout';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from '../api/axios';
import { Link } from 'react-router-dom';

const LOGIN_URL = '/auth';

export function Login() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, password }),
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      setAuth({ user, password, accessToken });
      setUser('');
      setPassword('');
      setSuccess(true);
      console.log('user logado');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing username or password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      alert('Login');
      setLoading(false);
    } catch (err) {
      alert('Algo deu errado com o Login' + err);
    }
  };

  return (
    <MainLayout>
      <Form onSubmit={handleSubmit}>
        <p
          ref={errRef}
          className={errMsg ? 'errMsg' : 'offscreen'}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            ref={userRef}
            placeholder="Enter email"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          disabled={loading}
          className="mr-3"
          variant="primary"
          type="submit"
          as={Link}
          to="/questions"
        >
          Submit
        </Button>
        <Button variant="secondary">sign up</Button>
      </Form>
    </MainLayout>
  );
}
