import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="m-2">
      <h1>About this App</h1>
      <p>This is a full-stack React App for keeping Contacts</p>
      <p>
        <strong>Version:</strong>1.0.0
      </p>

      <Link to="/">
        <button className="btn btn-secondary">Go to HomePage</button>
      </Link>
    </div>
  );
};

export default About;
