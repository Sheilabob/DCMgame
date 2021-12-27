import React, { Component } from 'react';
import CardGame from './CardGameComponent';
import Header from './HeaderComponent';
import PlayASong from './PlayComponent.jsx';
import Home from './HomeComponent';
import { NOTECARDS } from '../shared/notecards.js';
import { PIANOKEYS } from '../shared/pianokeys';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteCards: NOTECARDS,
            pianokeys: PIANOKEYS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home pianokeys={this.state.pianokeys} />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path ='/cardgame' render={() => <CardGame pianokeys = {this.state.pianokeys} noteCards={this.state.noteCards}/>} />
                    <Route exact path ='/playasong' render={() => <PlayASong noteCards={this.state.noteCards}/>} />
                    <Redirect to='/home' />

                </Switch>
            </div>
        );
    }
}

export default Main;