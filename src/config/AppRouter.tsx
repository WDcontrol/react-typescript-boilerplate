import React from 'react'
import history from "./history";
import { Router, Route } from "react-router-dom";
import {Home, About} from "views"


export default function AppRouter() {
    return <Router history={history}>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
    </Router>
};
