import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import Page from './Page';

const Main = () => <Page />;
const About = () => <Page title="About me" />;
const Thing = () => <Page title="Thing" />;
const Thing2 = () => <Page title="Thing2" />;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/thing" component={Thing} />
          <Route path="/thing-2" component={Thing2} />
          <Route path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
