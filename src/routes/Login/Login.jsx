import React from "react";
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
    <div>
      <h3>LOGIN</h3>
      <button onClick={onClick}>LOGIN</button>
    </div>
  );
};

export { Login };
