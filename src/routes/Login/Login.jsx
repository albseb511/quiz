import React from "react";
import {Row, Col, Button,Typography} from "antd"
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { fbaseapp, googleAuthProvider } from "../../firebase/fbase";

const Login = () => {
  const { isAuth } = useSelector((state) => state.auth);

  const onClick = () => {
    fbaseapp
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <Row justify="center" align="middle" span={24} gutter={[16,16]}>
      <Col style={{border:'1px solid black', padding: 50, marginTop:'20vh', height: '500px', background:'#cecece'}} sm={24} lg={12} justify="center" align="middle">
        <Typography.Title level={1}>Welcome to Masai Quiz</Typography.Title>
        <Button onClick={onClick}>Login With Google</Button>
      </Col>
    </Row>
  );
};

export { Login };
