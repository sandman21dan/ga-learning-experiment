import React from 'react';
import Link from '../Link';
import Header from '../Header';
import ButtonGroup from '../ButtonGroup';

const Buy = () => (
  <>
    <Header/>
    <p>
      Please buy my product
    </p>
    <Link to="/buy-2">Checkout</Link>
    <ButtonGroup/>
  </>
);

export default Buy;
