import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

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
                <Navbar dark sticky="top" expand="sm">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">
                            <h3>Play Mode:</h3>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-music fa-lg" /> Keyboard
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/cardgame">
                                        <i className="fa fa-star fa-lg" /> Card Game
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/playasong">
                                        <i className="fa fa-play fa-lg" /> Play a Song
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
             </React.Fragment>
        );
    }
}

export default Header;