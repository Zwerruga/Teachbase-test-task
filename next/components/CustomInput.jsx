import React, { memo, useState, useEffect } from "react";
import { v4 } from "uuid";
/**
    * Renders a <CustomInput/> component
    * @param {String} type - input param type
    * @param {String} value - input param value
    * @param {String} placeholder - placeholder text
    * @param {String} iconHtml - a string containing the html to embedded in the label using dangerouslySetInnerHTML method
    * @param {String} error - message about error in a specific field
    * @param {Function} onChange - function which be call, then target dispatch change event, with event param
    * @example  
    * <div className="auth__input">
        <label 
        htmlFor={id} 
        dangerouslySetInnerHTML={{ __html: ""}}
        ></label>
        <input
          type="text"
          placeholder="Text"
          id={id}
          autoComplete="off"
          value=""
          onChange={()=>{}}
        />
      </div>
    */

export default memo(function CustomInput({
  type = "text",
  placeholder = "Text",
  iconHtml = [],
  error = "",
  value = "",
  onChange = () => {},
}) {
  const id = v4();
  const [errorMsg, setErrorMsg] = useState(error);
  useEffect(() => {
    if (error) setErrorMsg(error);
    return () => {
      setErrorMsg("");
    };
  }, [error]);
  return (
    <div
      className="auth__input"
      onFocus={() => setErrorMsg("")}
      onBlur={() => setErrorMsg(error)}
    >
      <label
        htmlFor={id}
        dangerouslySetInnerHTML={{ __html: iconHtml }}
      ></label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
      {errorMsg && (
        <span className="error">
          <p className="error_msg">{error}</p>
          <i className="fas fa-info"></i>
        </span>
      )}
    </div>
  );
});
