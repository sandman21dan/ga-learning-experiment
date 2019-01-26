import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import Page from './Page';
import Buy from './Buy';
import Buy2 from './Buy/Buy2';
import Buy3 from './Buy/Buy3';

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
          <Route path="/buy" component={Buy} />
          <Route path="/buy-2" component={Buy2} />
          <Route path="/buy-3" component={Buy3} />
          <Route path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
