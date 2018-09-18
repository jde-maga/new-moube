import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div>Page not found. <Link to="/">Go back to main menu</Link></div>
    )
  }
};

export default NotFound;