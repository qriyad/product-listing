import { Card, Flex, Input, Button, Space, Typography } from 'antd';
import React from 'react'

const boxStyle = {
    width: "100%",
    height: "100vh",
    backgroundColor: "lightgrey",
    backgroundSize: "cover",
};

const Login = () => {
  return (
    <Flex style={boxStyle} align="center" justify="center">
        <Card title="Login" bordered={false} style={{ width: 500 }}>
        <Space size="small" direction="vertical" style={{ width: "100%" }}>
            <Input type="text" name='name' placeholder="Name" />
            <Input type="text" name='surname' placeholder="Surname" />
            <Input type="email" name='email' placeholder="Email" />
            <Input type="password" name='password' placeholder="Password" />
            <Input type="password" name='confirm_password' placeholder="Confirm Password" />
            <Flex justify='space-between' align='center'>
                <Button type="primary">Register</Button>
            </Flex>
        </Space>
        </Card>
    </Flex>
  )
}

export default Login