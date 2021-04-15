import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
//import { Router,Route } from 'react-router';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
// eslint-disable-next-line no-unused-vars
import Homeexact from './Homeexact';
import Page1 from './Page1.js';
import Page2 from './Page2.js';
import SiderLayout from './antd/SiderLayout.js';
import HomeFlex from './purecss/shengbeiLayout/HomeFlex.js';
import Grid from './purecss/shengbeiLayout/Grid.js';
import Float from './purecss/shengbeiLayout/Float.js';
import Absolute from './purecss/shengbeiLayout/Absolute.js';
import Table from './purecss/shengbeiLayout/Table.js';
import HomeCenterFlex from './purecss/center/HomeFlex.js';
import JDinterview from './purecss/center/JDinterview.js';
import Purehtml from './purecss/cssforpurehtml/purehtml.js';
import ReactLearn from './react/ReactLearn.js';
// eslint-disable-next-line no-unused-vars
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
                <Route path="/Antd/SiderLayout" component={SiderLayout} />  
                <header className="App-header">
                    <span>
                        <Route exact path="/" component={Home} />
                        <Route path="/shengbeiLayout" component={HomeFlex} />
                        {/* <Route exact path="/" component={Homeexact} /> */}
                        <Route path="/Page1" component={Page1} />
                        <Route path="/Page2" component={Page2} />
                        <Route path="/shengbeiLayout/Grid" component={Grid} />
                        <Route path="/shengbeiLayout/Float" component={Float} />
                        <Route path="/shengbeiLayout/Absolute" component={Absolute} />
                        <Route path="/shengbeiLayout/Table" component={Table} />
                        <Route path="/center" component={HomeCenterFlex} />
                        <Route path="/center/JDinterview" component={JDinterview} />
                        <Route path="/purehtml" component={Purehtml} />
                        <Route path="/react" component={ReactLearn} />
                        {/* <DatePicker /> */}
                    </span>
                </header>
            </div>
        </Router>
    );
}

export default App;
