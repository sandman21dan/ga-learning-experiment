import React from 'react';

import { Link } from "react-router-dom";

import './ButtonGroup.css';

const ButtonGroup = () => (
  <div className="button-group">
    <Link className="btn" to="/about">About me</Link>
    <Link className="btn" to="/thing">Things</Link>
    <Link className="btn" to="/thing-2">More things</Link>
  </div>
);

export default ButtonGroup;