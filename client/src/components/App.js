import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header.js'

const Dashboard = () => <h2>Dashboard</h2>
const SurveryNew = () => <h2>SurveryNew</h2>
const Landing = () => <h2>Landing</h2>

export default class App extends Component {
  render() {
    return(
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveryNew} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
