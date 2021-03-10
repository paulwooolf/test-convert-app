import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Display from "../display";
import Converter from "../converter";
import Home from "../home";
import Header from "../header/header";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Header />

                <Switch>
                    <Route path="/display">
                        <Display />
                    </Route>
                    <Route path="/converter">
                        <Converter />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        )
    }
}
