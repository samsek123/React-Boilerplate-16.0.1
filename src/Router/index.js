// @flow
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Sample from '../View/Sample';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

type Props = {

}
class Router extends Component<Props> {
  static defaultProps = {

  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </BrowserRouter>
    );
  };
}

export default Router;
