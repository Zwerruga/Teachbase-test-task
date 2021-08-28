import React, { memo } from "react";
/**
    * Renders a <SocLogin/> component
    * @param {String} title - text in span before icons list
    * @example 
    * <div className="social-login">
      <span className="social-label"></span>
      <ul className="socials">
        <li>
          <a href="#">
            <i className="fab fa-google"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
      </ul>
    </div>
    */

export default memo(function SocLogin({ title = "" }) {
  return (
    <div className="social-login">
      <span className="social-label">{title}</span>
      <ul className="socials">
        <li>
          <a href="#">
            <i className="fab fa-google"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
      </ul>
    </div>
  );
});
