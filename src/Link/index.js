import React from 'react';

import { Link as RouterLink } from "react-router-dom";

const gaPageView = (to) => {
  // window.dataLayer.push(['set', 'page', to]); 
  window.gtag('set', 'page', to);
  window.gtag('send', 'pageview');

  // window.dataLayer.push({
  //   'event':'VirtualPageview',
  //   'virtualPageURL': to,
  //   });
}

const Link = ({
  to,
  className,
  children
}) => (
  <RouterLink className={className} to={to} onClick={(event) => gaPageView(to)}>{children}</RouterLink> );

export default Link;

