import { Button } from 'antd'
import { useRoutes } from 'react-router-dom'
import Login from './Auth/Login';
import Register from './Auth/Register';
import  ForgotPassword from './Auth/ForgotPassword';

const Pages = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "*",
      element: <div>404</div>,
    }
  ]);
  return routes;
}
export default Pages;