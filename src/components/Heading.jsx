import React, { Component } from 'react'
import { Navbar } from 'react-materialize';
import {NavLink} from 'react-router-dom';

export default class Heading extends Component {
    render() {
        return (
            <nav>
                <Navbar className={"light-blue darken-3"} alignLinks="left" fixed={true}  brand={<NavLink to='/' exact>Hi from Juunnn</NavLink>} centerLogo>
                    <NavLink to='/myself' activeClassName={'active'}>
                        MySelf
                    </NavLink>

                    <NavLink to='/mycircle' activeClassName={'active'}>
                        MyCircle
                    </NavLink>

                    <NavLink to='/mywork' activeClassName={'active'}>
                        MyWork
                    </NavLink>
                </Navbar>
            </nav>
        )
    }
}
