import React from "react";
import PropTypes from "prop-types";

import "normalize.css";
import "./index.css";

const Layout = ({ children }) => (
  <>
    <h1>Pura</h1>

    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
