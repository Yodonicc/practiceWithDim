import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
//import { Router,Route } from 'react-router';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Homeexact from './Homeexact';
import Page1 from './Page1.js';
import Page2 from './Page2.js';
import { DatePicker } from 'antd';
import axios from 'axios'
//import createSagaMiddleware from 'redux-saga'
import './App.css';
import 'antd/dist/antd.css';

function App() {
  axios.get('https://gank.io/api/v2/banners')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  return (
    <Router >
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <Counter />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          <span>
            <Route path="/" component={Home} />
            <Route exact path="/" component={Homeexact} />
            <Route path="/Page1" component={Page1} />
            <Route path="/Page2" component={Page2} />
            <DatePicker />
            <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              子页面2
            </a>
            {/* <span>Learn </span>
            <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className="App-link"
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a> */}
            
          </span>
        </header>
      </div>
    </Router>
  );
}

export default App;
