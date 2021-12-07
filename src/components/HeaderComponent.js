import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <img src="/assets/images/pianoLegArch.jpg" height="140" alt="piano arch"/>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-8">
                                <h1>Desert Child Music</h1>
                                <h2>Piano Games</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top">
                <div className="container">
                    <NavbarBrand href="/">Desert Child Music</NavbarBrand>
                </div>
                </Navbar>
             </React.Fragment>
        );
    }
}

export default Header;