import React from "react";

const Layout = ({ children }) => {
  return <div className="container mx-auto mt-5 px-4" suppressHydrationWarning>{children}</div>;
};

export default Layout;
