import React, { memo } from "react";
import Head from "next/head";

export default memo(function PageWrapper({ children }) {
  return (
    <div className="wrapper">
      <Head>
        <link
          href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
          rel="stylesheet"
        />
        <title>Test task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
});
