import React, { memo, useState } from "react";
import PageWrapper from "../components/PageWrapper.jsx";
import CustomInput from "../components/CustomInput.jsx";
import CustomPasswordInput from "../components/CustomPasswordInput.jsx";
import AuthButton from "../components/AuthButton.jsx";
import SocLogin from "../components/SocLogin.jsx";
import SignImage from "../components/SignImage.jsx";
import { postJSON } from "../utils/apiCalls.js";

export default memo(function Login() {
  const [loginData, setLoginData] = useState({ login: "", password: "" });
  const [error, setError] = useState("");
  const handleSubmit = async () => {
    await postJSON(
      "http://ec2-18-117-84-227.us-east-2.compute.amazonaws.com/login",
      loginData
    )
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
      })
      .catch((err) => {
        setError("Invalid email or password");
      });
  };

  return (
    <PageWrapper>
      <div className="form">
        <div className="auth">
          <h2 className="auth__title">Login</h2>
          <form action="" className="auth__form">
            <CustomInput
              type="text"
              placeholder="Login"
              iconHtml={`<i class=\"far fa-envelope\"></i>`}
              error={error}
              value={loginData.login}
              onChange={(e) =>
                setLoginData((s) => ({ ...s, login: e.target.value }))
              }
            />
            <CustomPasswordInput
              placeholder="Password"
              iconHtml={`<i class="fas fa-key"></i>`}
              value={loginData.password}
              onChange={(e) =>
                setLoginData((s) => ({ ...s, password: e.target.value }))
              }
            />

            <AuthButton title="Login" onClick={handleSubmit} />
          </form>
          <SocLogin title="Or login with" />
        </div>
        <SignImage
          src={"https://i.ibb.co/hMy1SJc/8619.jpg"}
          linkTo={"/register"}
          linkText={"Create an account"}
        />
      </div>
    </PageWrapper>
  );
});
