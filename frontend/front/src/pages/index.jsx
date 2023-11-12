import { ConfigProvider, Switch, theme } from "antd";
import { useRoutes } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import ForgotPassword from "./Auth/ForgotPassword";
import { useState } from "react";

const Pages = () => {
  const [isDark, setDark] = useState(false);

  const { darkAlgorithm, defaultAlgorithm } = theme;

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
    },
  ]);
  return (
    <ConfigProvider
      theme={{ algorithm: isDark ? darkAlgorithm : defaultAlgorithm }}
    >
      <Switch
        checked={isDark}
        onChange={() => {
          setDark(!isDark);
        }}
      />
      {routes}
    </ConfigProvider>
  );
};

export default Pages;