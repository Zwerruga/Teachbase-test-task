import React, { memo } from "react";
/**
 * Renders a <AuthButton/> component
 * @param {String}  title - text in button
 * @param  {Function} onClick - the function callback, call with event param then user click on button
 * @example  <a className="auth__input auth__button" onClick={()=>{}}>Sign up</a>
 */

export default memo(function AuthButton({
  title = "Sign up",
  onClick = () => {},
}) {
  return (
    <p className="auth__input auth__button" onClick={onClick}>
      {title}
    </p>
  );
});
