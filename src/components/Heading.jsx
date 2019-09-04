import React, { Component, Fragment } from 'react';
import { Navbar,  NavItem } from 'react-materialize';
import {Link, Switch, Route, BrowserRouter} from "react-router-dom";
import Landing from '../Landing';
import MyCircle from './MyCircle';
import MyWork from './MyWork';

export default class Heading extends Component {
    render() {
        return (
            <Fragment>
            <BrowserRouter>
            <Navbar className={"light-blue darken-3"} alignLinks="left" fixed={true}  brand={<Link to='/'> One </Link>} centerLogo>
                <NavItem>
                    <Link to='/myworks'> MyWorks </Link>
                </NavItem>
                <NavItem>
                    <Link to='/mycircle'> MyCircle</Link>
                </NavItem>
            </Navbar>

            
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/mycircle' component={MyCircle} />
                <Route exact path='/myworks' component={MyWork} />
            </Switch>
            </BrowserRouter>

            </Fragment>
        )
    }
}
