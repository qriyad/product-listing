import { Card, Flex, Input, Button, Space, Typography, Switch } from 'antd';
import React, { useState } from 'react';
import MoonIcon from '../../components/icons/MoonIcon'
import SunIcon from '../../components/icons/SunIcon'
import SwitchIcon from '../../components/Switch'

const boxStyle = {
  width: "100%",
  height: "100vh",
  backgroundColor: "lightgrey",
  backgroundSize: "cover",
};

const fakeAuthentication = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'user@example.com' && password === 'userpassword') {
        resolve({ role: 'user' });
      } else if (email === 'admin@example.com' && password === 'adminpassword') {
        resolve({ role: 'admin' });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const user = await fakeAuthentication(email, password);
      console.log('Logged in as', user.role);
    } catch (error) {
      console.error('Authentication failed:', error.message);
    }
  };

  return (
      <Flex style={boxStyle} align="center" justify="center">
        <Card title="Login" bordered={false} style={{ width: 500 }}>
          <Space size="small" direction="vertical" style={{ width: '100%' }}>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Flex justify="space-between" align="center">
              <Button type="primary" onClick={handleLogin}>
                Login
              </Button>
              <MoonIcon />
              <SwitchIcon />
              <SunIcon />
              <Typography.Link>Forgot Password?</Typography.Link>
            </Flex>
          </Space>
        </Card>
      </Flex>
  );
};

export default Login;
