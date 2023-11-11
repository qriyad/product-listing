import { Card, Flex, Input, Button, Space, Typography, Switch } from 'antd';
import React, { useState } from 'react';
import MoonIcon from '../../components/icons/MoonIcon';
import SunIcon from '../../components/icons/SunIcon';
import usersData from '../people.json';

const boxStyle = {
  width: '100%',
  height: '100vh',
  backgroundSize: 'cover',
  transition: 'background-color 0.3s',
};

const darkTheme = {
  backgroundColor: '#333',
  color: '#fff',
};

const lightTheme = {
  backgroundColor: 'lightgrey',
  color: 'black',
};

const fakeAuthentication = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = usersData.users.find((u) => u.email === email && u.password === password);

      if (user) {
        resolve({ role: user.role });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState('light'); // Default theme is light

  const handleLogin = async () => {
    try {
      const user = await fakeAuthentication(email, password);
      console.log('Logged in as', user.role);
    } catch (error) {
      console.error('Authentication failed:', error.message);
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Flex style={{ ...boxStyle, ...(theme === 'dark' ? darkTheme : lightTheme) }} align="center" justify="center">
      <Card title="Login" bordered={false} style={{ width: 500 }}>
        <Space size="small" direction="vertical" style={{ width: '100%' }}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ background: 'transparent' }}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ background: 'transparent' }}
          />
          <Flex justify="space-between" align="center">
            <Button type="primary" onClick={handleLogin}>
              Login
            </Button>
            <SunIcon />
            <Switch checked={theme === 'dark'} onChange={toggleTheme} />
            <MoonIcon />
            <Typography.Link>Forgot Password?</Typography.Link>
          </Flex>
        </Space>
      </Card>
    </Flex>
  );
};

export default Login;
