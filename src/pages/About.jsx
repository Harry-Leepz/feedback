import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Card>
      <h1>This is the About Us Page!</h1>
      <p>This is react app to leave feedback about a product or service.</p>
      <p>Version: 1.0.0</p>
      <Link to='/'>Back Home</Link>
    </Card>
  );
};

export default About;
