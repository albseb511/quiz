import { Menu, Layout } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router-dom";
import {
  HomeOutlined,
  TagsOutlined,
  SettingOutlined,
  FileAddOutlined,
  SearchOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import { makeStyles } from "@material-ui/styles";
import { fbaseapp } from "../../../firebase/fbase";

const { Content,  Sider } = Layout;

const width = 80;

const useStyles = makeStyles({
  root: {
    padding: 50,
  },
  menu: {
    width: width,
  },
  sider:{
    background:"black"
   },
  content:{ 
    overflow: "auto", 
    padding: '3rem', 
    background:"#212121"
   }
});

const links = [
  {
    key: "home",
    icon: <HomeOutlined />,
    title: "HOME",
    path: "/",
  },
  {
    key: "search",
    icon: <SettingOutlined />,
    title: "SEARCH",
    path: "/search",
  },
  {
    key: "add-question",
    icon: <FileAddOutlined />,
    title: "ADD QUESTION",
    path: "/add-question",
  },
  {
    key: "tags",
    icon: <TagsOutlined />,
    title: "TAGS",
    path: "/tags",
  },
  {
    key: "user",
    icon: <SettingOutlined />,
    title: "USER",
    path: "/user",
  },
];

const PrivateRoutes = ({ path, exact, children }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const loading = useSelector((state) => state.auth.loading);
  const classes = useStyles();
  const history = useHistory();
  if (loading) {
    return <div>...loading</div>;
  }

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  const handleMenuClick = (path) => {
    history.push(path);
  };

  const logout = () => {
    fbaseapp
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Sider collapsed={true} className={classes.sider} collapsedWidth={width}>
          <Menu className={classes.menu} mode="inline">
            {links.map((item) => (
              <Menu.Item
                onClick={() => handleMenuClick(item.path)}
                key={item.key}
                icon={item.icon}
              >
                {item.title}
              </Menu.Item>
            ))}
            <Menu.Item
                onClick={logout}
                key="logout"
                icon={<LogoutOutlined />}
            >
                LOGOUT
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content className={classes.content}>
            <Route path={path} exact={exact}>
              {children}
            </Route>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export { PrivateRoutes };
