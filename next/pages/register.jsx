import React, { memo, useState } from "react";
import PageWrapper from "../components/PageWrapper.jsx";
import CustomInput from "../components/CustomInput.jsx";
import CustomPasswordInput from "../components/CustomPasswordInput.jsx";
import AuthButton from "../components/AuthButton.jsx";
import SocLogin from "../components/SocLogin.jsx";
import SignImage from "../components/SignImage.jsx";
import registerValidator from "../utils/registerValidator.js";
import { postJSON } from "../utils/apiCalls.js";

export default memo(function Register() {
  const [registerData, setRegisterData] = useState({
    login: "",
    email: "",
    password: "",
    cfPassword: "",
  });
  const [errors, setErrors] = useState({});
  const handleSubmit = async () => {
    const errorsInForm = registerValidator(registerData);
    if (
      errorsInForm &&
      Object.keys(errorsInForm).length === 0 &&
      errorsInForm.constructor === Object
    )
      setErrors({ ...errorsInForm });
    else {
      await postJSON(
        "http://ec2-18-117-84-227.us-east-2.compute.amazonaws.com/register",
        registerData
      )
        .then((res) => {
          if (!res.ok) throw new Error(res.status);
        })
        .catch((err) => {
          setErrors({
            login: "Invalid",
            email: "Invalid",
            password: "Invalid",
            cfPassword: "Invalid",
          });
        });
    }
  };
  return (
    <PageWrapper>
      <div className="form register">
        <div className="auth">
          <h2 className="auth__title">Register</h2>
          <form action="" className="auth__form">
            <CustomInput
              placeholder="Username"
              iconHtml={`<i class="far fa-user"></i>`}
              error={errors.login}
              value={registerData.login}
              onChange={(e) =>
                setRegisterData((s) => ({ ...s, login: e.target.value }))
              }
            />
            <CustomInput
              type="email"
              placeholder="Email"
              iconHtml={`<i class="far fa-envelope"></i>`}
              error={errors.email}
              value={registerData.email}
              onChange={(e) =>
                setRegisterData((s) => ({ ...s, email: e.target.value }))
              }
            />
            <CustomPasswordInput
              placeholder="Password"
              iconHtml={`<i class="fas fa-key"></i>`}
              error={errors.password}
              value={registerData.password}
              onChange={(e) =>
                setRegisterData((s) => ({ ...s, password: e.target.value }))
              }
            />
            <CustomPasswordInput
              placeholder="Confirm password"
              iconHtml={`<i class="fas fa-key"></i>`}
              error={errors.cfPassword}
              value={registerData.cfPassword}
              onChange={(e) =>
                setRegisterData((s) => ({ ...s, cfPassword: e.target.value }))
              }
            />

            <AuthButton title="Register" onClick={handleSubmit} />
          </form>
          <SocLogin title="Or register with" />
        </div>
        <SignImage
          src={"https://i.ibb.co/jVdC884/6671-min.jpg"}
          linkTo={"/login"}
          linkText={"I am already member"}
        />
      </div>
    </PageWrapper>
  );
});
