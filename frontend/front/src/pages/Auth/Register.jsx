import { Card, Flex, Input, Button, Space } from 'antd';
import React, { useState } from 'react';
import usersData from '../people.json'; // Import the JSON file

const boxStyle = {
  width: '100%',
  height: '100vh',
  backgroundColor: 'lightgrey',
  backgroundSize: 'cover',
};

const isUserRegistered = (email) => {
  return usersData.users.some((user) => user.email === email);
};

const registerUser = (userData) => {
  usersData.users.push(userData);
  // Save the updated user data back to the JSON file or your backend/database
  // For simplicity, in this example, we are not saving it back to the file.
  console.log('User registered:', userData);
};

const Registration = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (isUserRegistered(email)) {
      console.error('User already registered with this email.');
    } else {
      if (password !== confirmPassword) {
        console.error('Password and confirm password do not match.');
      } else {
        const userData = {
          name,
          surname,
          email,
          password,
          role: 'user', // You can set a default role for registered users
        };
        registerUser(userData);
      }
    }
  };

  return (
    <Flex style={boxStyle} align="center" justify="center">
      <Card title="Register" bordered={false} style={{ width: 500 }}>
        <Space size="small" direction="vertical" style={{ width: '100%' }}>
          <Input type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <Input type="text" name="surname" placeholder="Surname" onChange={(e) => setSurname(e.target.value)} />
          <Input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <Input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Flex justify="space-between" align="center">
            <Button type="primary" onClick={handleRegister}>
              Register
            </Button>
          </Flex>
        </Space>
      </Card>
    </Flex>
  );
};

export default Registration;
