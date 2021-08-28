import React, { memo } from "react";
import Link from "next/link";
/**
    * Renders a <SignImage/> component
    * @param {String} src - img src param
    * @param {String} linkTo - href when redirecting
    * @param {String} linkText - text in link
    * @example 
    * <div class="sign-image">
      <img src="" />
      <p>
        <a href="/"></a>
      </p>
    </div>
    */

export default memo(function SignImage({
  src = "",
  linkTo = "/",
  linkText = "",
}) {
  console.log(src);
  return (
    <div className="sign-image">
      <img src={src} alt="" />
      <p>
        <Link href={linkTo}>{linkText}</Link>
      </p>
    </div>
  );
});
