import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import ButtonGroup from '../ButtonGroup';

const Buy2 = () => (
  <>
    <Header/>
    <p>
      Almost there
    </p>
    <input type="text" placeholder="Payment details"/>
    <Link to="/buy-3">Pay</Link>
    <ButtonGroup/>
  </>
);

export default Buy2;
