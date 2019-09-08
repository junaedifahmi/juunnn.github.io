import React, { Component, Fragment } from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Heading from "./components/Heading"
import Home from "./components/Home";
import MyWork from "./components/MyWork";
import MyCircle from "./components/MyCircle";


export default class Landing extends Component {

    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Heading />
                    <main>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/mywork' exact component={MyWork} />
                            <Route path='/mycircle' exact component={MyCircle} />
                        </Switch>
                    </main>
                </BrowserRouter>
            </Fragment>
        )
    }
}
