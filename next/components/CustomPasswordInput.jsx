import React, { memo, useState } from "react";
import CustomInput from "./CustomInput.jsx";
/**
    * Renders a <CustomPasswordInput/> component
    * Look like <CustomInput /> with the ability to hide
    * @param {String} type - input param type
    * @param {String} value - input param value
    * @param {String} placeholder - placeholder text
    * @param {String} iconHtml - a string containing the html to embedded in the label using dangerouslySetInnerHTML method
    * @param {String} error - message about error in a specific field
    * @param {Function} onChange - function which be call, then target dispatch change event, with event param
    * @example  
    * <div className="auth__input-password-wrapper">
      * <div className="auth__input">
          <label 
          htmlFor={id} 
          dangerouslySetInnerHTML={{ __html: ""}}
          ></label>
          <input
            type="password"
            placeholder="Text"
            id={id}
            autoComplete="off"
            value=""
            onChange={()=>{}}
          />
        </div>
        <div class="toggle-show" onClick={toggleHide}>
          <i className="fas fa-eye"></i>
        </div>
      </div>
    */

export default memo(function CustomPasswordInput(props) {
  const [hide, setHide] = useState(true);
  return (
    <div className="auth__input-password-wrapper">
      {hide ? (
        <CustomInput type="password" {...props} />
      ) : (
        <CustomInput type="text" {...props} />
      )}
      <div class="toggle-show" onClick={() => setHide((s) => !s)}>
        {hide ? (
          <i className="fas fa-eye"></i>
        ) : (
          <i className="fas fa-eye-slash"></i>
        )}
      </div>
    </div>
  );
});
