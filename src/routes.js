import Layoutooo from "./views/layout";
import React from "react";
import Erji from "./views/erji";
import Test from "./views/test";

import {
  Navigate,
} from "react-router-dom";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

const routes = [
  {
    type: "",
    label: "Layout",
    key: "layout",
    icon: React.createElement(LaptopOutlined),
    route: "/layout",
    component: <Layoutooo />,
    children: [{
      type: "",
      label: "Erji",
      key: "erji",
      icon: React.createElement(NotificationOutlined),
      route: "/layout/erji",
      component: <Erji />,
    },
    {
      type: "",
      label: "Test",
      key: "test",
      icon: React.createElement(NotificationOutlined),
      route: "/layout/test",
      component: <Test />,
    }
  ],
  },
  {
    type: "",
    name: "home",
    key: "home",
    icon: '',
    route: "/",
    component: <Navigate to="/layout/erji" replace={true}/>,
  },
];

export default routes;
