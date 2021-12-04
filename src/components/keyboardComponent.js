import React, { Component } from 'react';
import { NOTECARDS } from '../shared/notecards.js';
import { Card, CardImg, CardTitle, Row, Col, Button } from 'reactstrap';



function playNote(x) {
    const note = new Audio("assets/sound/" + x + ".mp3");
    note.play();
}

// Can an object include a function?  If so, can I map through the keys to create the event listeners?

class Keyboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteCards: NOTECARDS,
            checkedCard: null,
        };
    }

    onGameStart(notecard) {
        this.setState({currentCard: notecard});
        this.setState({checkedCard: null})
    }

    checkTheCard(notecard, x) {
        if (notecard.name === x) {
            this.setState({checkedCard: "/assets/images/hooray.jpeg"});
        } else {
            this.setState({checkedCard: "/assets/images/tryagain.jpeg"});
        }
    }

    renderResponse(checkedcard) {
        if (checkedcard) {
            return(
                <Card>
                    <CardImg className="responseCard" src={checkedcard} />
                </Card>
            )
            
        }
    }

    renderCurrentCard(notecard) {
        if (notecard) {
            return(
                <Card>
                    <CardImg className="flashCard" src={notecard.image} />
                </Card>
            )
        }
    }

// if i made a transparent box under the Keyboard, would that hold the space for it in the app?

    render() {

        let randomNumber = Math.floor(Math.random() * (this.state.noteCards.length-1));

        return (
            <div className="container">
                <div className="row">
                    <div className="col-1 m-2 here">
                        <div id="keyboardCard">
                            <button className="blackNote dSharp" id="dSharpNote" onClick={() => {playNote("dSharp")}}></button>
                            <button className="blackNote cSharp" id="cSharpNote" onClick={() => {playNote("cSharp")}}></button>
                            <button className="blackNote fSharp" id="fSharpNote" onClick={() => {playNote("fSharp")}}></button>
                            <button className="blackNote gSharp" id="gSharpNote" onClick={() => {playNote("gSharp")}}></button>
                            <button className="blackNote aSharp" id="aSharpNote" onClick={() => {playNote("aSharp")}}></button>

                            <button className="whiteNote cNote" id = "cNote" onClick={() => {playNote("C"); this.checkTheCard(this.state.currentCard, "C")}} ></button>
                            <button className="whiteNote dNote" id = "dNote" onClick={() => {playNote("D"); this.checkTheCard(this.state.currentCard, "D")}} ></button>
                            <button className="whiteNote eNote" id = "eNote" onClick={() => {playNote("E"); this.checkTheCard(this.state.currentCard, "E")}} ></button>
                            <button className="whiteNote fNote" id = "fNote" onClick={() => {playNote("F"); this.checkTheCard(this.state.currentCard, "F")}} ></button>
                            <button className="whiteNote gNote" id = "gNote" onClick={() => {playNote("G"); this.checkTheCard(this.state.currentCard, "G")}} ></button>
                            <button className="whiteNote aNote" id = "aNote" onClick={() => {playNote("A"); this.checkTheCard(this.state.currentCard, "A")}} ></button>
                            <button className="whiteNote bNote" id = "bNote" onClick={() => {playNote("B"); this.checkTheCard(this.state.currentCard, "B")}} ></button>
                            {/* <img src="assets/images/largeRoom.jpeg" className="keyboardSpaceHolder" /> */}
                        </div>
                    </div>
                    <div className="col-5">

                    </div>
                    <div className="col">
                    
                    <Card>
                        <Button onClick={() => this.onGameStart(this.state.noteCards[randomNumber])}>Start Game</Button>
                    </Card>
                    {this.renderCurrentCard(this.state.currentCard)}
                    {this.renderResponse(this.state.checkedCard)}
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default Keyboard;