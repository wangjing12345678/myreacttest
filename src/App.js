import React, { useEffect } from "react";
import "./App.css";
import store from "./store/index";
// import { testApi } from './api/test'
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useNavigation,
  useLocation,
  Link,
  redirect,
  json,
} from "react-router-dom";
import routes from "./routes";
import { connect, Provider } from "react-redux";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import { useStoreController } from "./context";
import Layoutooo from "./views/layout";
import Erji from "./views/erji";
import RouterView from "./components/RouterView";
const { Header, Content, Footer, Sider } = Layout;

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

function App() {
  // testApi().then(res => {
  //   console.log(res)
  // })
  console.log("刷新");

  const [controller] = useStoreController();

  const { testWangjing } = controller;

  // const getRoutes = (allRoutes) =>
  //   allRoutes.map((route) => {
  //     if (route.children) {
  //       return getRoutes(route.children);
  //     }

  //     if (route.route) {
  //       return (
  //         // <Route path={route.route} element={route.component} key={route.key} />
  //       );
  //     }

  //     return null;
  //   });
  // console.log(getRoutes(routes));
  const navigate = useNavigate();
  // 点击菜单
  function ClickItem({ item, key, keyPath, domEvent }) {
    navigate(item.props.route);
  }

  let tempSelectedKeys = [];
  let tempOpen = [];

  

  function getCurrentRoute(arr, target) {
    for (let i of arr) {
      if (i.children && i.children.length) {
        let findIndex = i.children.findIndex((y) => y.route == target);
        if (findIndex > -1) {
          tempOpen.push(i.children[findIndex].key);
          tempSelectedKeys.push(i.key);
        }
      }
    }
  }

  let location = useLocation();
  getCurrentRoute(routes, location.pathname);
  const [defaultOpenKeys, setDefaultOpenKeys] = React.useState([
    ...tempSelectedKeys,
  ]);
  const [defaultSelectedKeys, setDefaultSelectedKeys] = React.useState([
    ...tempOpen,
  ]);
  console.log("defaultOpenKeys", defaultOpenKeys);
 

  return (
    <Provider store={store}>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items1}
          />
        </Header>
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>{testWangjing ? "Home" : "bian"}</Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/layout/erji">323232</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout
            className="site-layout-background"
            style={{
              padding: "24px 0",
            }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={defaultSelectedKeys}
                defaultOpenKeys={defaultOpenKeys}
                style={{
                  height: "100%",
                }}
                items={routes}
                onClick={ClickItem}
              />
            </Sider>
            <Content
              style={{
                padding: "0 24px",
                minHeight: 280,
              }}
            >
              <RouterView routeAll={routes}></RouterView>
            </Content>
          </Layout>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Provider>
  );
}

export default App;
