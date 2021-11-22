import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return(
            // <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <img src="/assets/images/stockPiano.jpeg" height="120" alt="piano logo"/>
                            </div>
                            <div className="col-3"></div>
                            <div className="col-6">
                                <h1>Desert Child Music</h1>
                                <h2>A Community Music School in Moab, UT</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                /* <Navbar dark sticky="top">
                <div className="container">
                    <NavbarBrand href="/">Desert Child Music</NavbarBrand>
                </div>
                </Navbar> */
            /* </React.Fragment> */
        );
    }
}

export default Header;