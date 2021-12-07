import React, { Component } from 'react';
import { NOTECARDS } from '../shared/notecards.js';
import { CUCKOO } from '../shared/cuckoo.js';
import { Card, CardImg, Button } from 'reactstrap';



function playNote(x) {
    const note = new Audio("assets/sound/" + x + ".mp3");
    note.play();
}

class Keyboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteCards: NOTECARDS,
            buttons: NOTECARDS.map(card => card.button),
            currentCard: null,
            checkedCard: null,
            randomNumber: Math.floor(Math.random() * (NOTECARDS.length)),
            gameCards: [],
            startTheGame: true,
            counter: 0,
            score: 1,
            cuckoo: CUCKOO
        };
    }

    renderStartGameButton(check) {
        if (check.length == 0 && this.state.startTheGame == true) {
            return(
                <Button onClick={() => this.onGameStart(this.state.noteCards[this.state.randomNumber])}>Start Game</Button>
            )
        } 
    }

    renderRestartGameButton(check) {
        if (check.length == 0 && this.state.checkedCard == "/assets/images/hooray.jpeg") {
            return(
                <div>
                    <CardImg className="gameoverCard" src="assets/images/gameOver.jpeg" />
                    <h6>Points Earned: {this.state.score-this.state.counter}</h6>
                    <Button onClick={() => this.onGameStart(this.state.noteCards[this.state.randomNumber])}>Restart Game</Button>
                </div>
            )
        } 
    }

    playASong(song) {
        let start = 0;
        let i=1

        song.map(note => setTimeout(() => {

            this.setState({buttons: [...this.state.buttons.slice(0, note.i), false, ...this.state.buttons.slice(note.i+1)]});
        setTimeout(() => {this.setState({buttons: NOTECARDS.map(card => card.button)})}, 400);

            playNote(note.name); }, start += note.length));
    }
    
    renderNextCardButton(check) {
        if (check.length > 0 && this.state.checkedCard == "/assets/images/hooray.jpeg" ) {
            return(
                <Button onClick={() => this.nextCard(this.state.gameCards[this.state.randomNumber])}>Next Card</Button>
            )
        } 
    }

    onGameStart(notecard) {
        console.log(this.state.randomNumber);
        this.setState({gameCards: this.state.noteCards.filter(note => note.id !== this.state.randomNumber)});
        this.setState({currentCard: notecard});
        this.setState({checkedCard: null});
        this.setState({ randomNumber: Math.floor(Math.random() * (this.state.gameCards.length)) });
        this.setState({startTheGame: false});
        this.setState({buttons: this.state.noteCards.map(card => card.button)});
        this.setState({counter: 0});
        this.setState({ score: 1});

    }

    nextCard(notecard) {
        console.log(this.state.randomNumber);
        this.setState({currentCard: notecard});
        this.setState({checkedCard: null});
        this.setState({gameCards: this.state.gameCards.filter(note => this.state.gameCards.indexOf(note) !== this.state.randomNumber)});
        this.setState({ randomNumber: Math.floor(Math.random() * (this.state.gameCards.length-1)) });
        this.setState({buttons: this.state.noteCards.map(card => card.button)})
        this.setState({score: this.state.score + 1});
        console.log(this.state.buttons)

    }

    checkTheCard(notecard, x) {
       if (notecard && this.state.checkedCard !== "/assets/images/hooray.jpeg") {
           if (notecard.name === x) {
            this.setState({checkedCard: "/assets/images/hooray.jpeg"});
            } else {
            this.setState({checkedCard: "/assets/images/tryagain.jpeg"});
            this.setState({counter: this.state.counter + 1});
            };
        }
    }

    changeTheNote(notecard, x, i) {
        if (notecard) {
            if (notecard.name === x) {
                if (this.state.buttons[i] === true) {
                    this.setState({buttons: [...this.state.buttons.slice(0, i), false, ...this.state.buttons.slice(i+1)]});
                }
            }
        }
    }

    renderResponse(checkedcard) {
        if (checkedcard) {
            return(
                <CardImg className="responseCard" src={checkedcard} />
            )   
        }
    }

    renderCurrentCard(notecard) {
        if (notecard) {
            return(
                <CardImg className="flashCard" src={notecard.image} />
            )
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-9 col-sm-8 col-md-6 col-lg-5 col-xl-4 m-1 here">
                        <Card className="keyboardCard">
                            <div id="keyboardCard">
                                <button className="blackNote dSharp" id="dSharpNote" onClick={() => {playNote("dSharp")}}></button>
                                <button className="blackNote cSharp" id="cSharpNote" onClick={() => {playNote("cSharp")}}></button>
                                <button className="blackNote fSharp" id="fSharpNote" onClick={() => {playNote("fSharp")}}></button>
                                <button className="blackNote gSharp" id="gSharpNote" onClick={() => {playNote("gSharp")}}></button>
                                <button className="blackNote aSharp" id="aSharpNote" onClick={() => {playNote("aSharp")}}></button>

                                <button className={this.state.buttons[0] === true ? "whiteNote": "whiteNoteClicked"} id = "cNote" onClick={() => {playNote("C"); this.checkTheCard(this.state.currentCard, "C"); this.changeTheNote(this.state.currentCard, "C", 0)}} ></button>
                                <button className={this.state.buttons[1] === true ? "whiteNote": "whiteNoteClicked"} id = "dNote" onClick={() => {playNote("D"); this.checkTheCard(this.state.currentCard, "D"); this.changeTheNote(this.state.currentCard, "D", 1);}} ></button>
                                <button className={this.state.buttons[2] === true ? "whiteNote": "whiteNoteClicked"} id = "eNote" onClick={() => {playNote("E"); this.checkTheCard(this.state.currentCard, "E"); this.changeTheNote(this.state.currentCard, "E", 2);}} ></button>
                                <button className={this.state.buttons[3] === true ? "whiteNote": "whiteNoteClicked"} id = "fNote" onClick={() => {playNote("F"); this.checkTheCard(this.state.currentCard, "F"); this.changeTheNote(this.state.currentCard, "F", 3);}} ></button>
                                <button className={this.state.buttons[4] === true ? "whiteNote": "whiteNoteClicked"} id = "gNote" onClick={() => {playNote("G"); this.checkTheCard(this.state.currentCard, "G"); this.changeTheNote(this.state.currentCard, "G", 4);}} ></button>
                                <button className={this.state.buttons[5] === true ? "whiteNote": "whiteNoteClicked"} id = "aNote" onClick={() => {playNote("A"); this.checkTheCard(this.state.currentCard, "A"); this.changeTheNote(this.state.currentCard, "A", 5);}} ></button>
                                <button className={this.state.buttons[6] === true ? "whiteNote": "whiteNoteClicked"} id = "bNote" onClick={() => {playNote("B"); this.checkTheCard(this.state.currentCard, "B"); this.changeTheNote(this.state.currentCard, "B", 6);}} ></button>
                            </div>
                        </Card>
                    </div>
                    <div className="col-9 col-sm-8 col-md-6 col-lg-5 col-xl-4 m-1">      
                        <Card className="startcard align-items-center justify-content-center">
                            <div className="container">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-4">
                                    {this.renderStartGameButton(this.state.gameCards)}
                                    {this.renderRestartGameButton(this.state.gameCards)}
                                    {this.renderNextCardButton(this.state.gameCards)}            
                                    </div>        
                                    <div className="col-4 align-items-center justify-content-center">
                                    {this.renderCurrentCard(this.state.currentCard)}
                                    </div>
                                    <div className="col-4 align-items-center justify-content-center">
                                    {this.renderResponse(this.state.checkedCard)}
                                    </div>
                                </div>
                            </div>
                        </Card> 
                    </div>
                </div>
                <div className="row">
                    <button onClick={() => {this.playASong(this.state.cuckoo)}}>Play a Song</button>
                </div>
            </div>
        );
    }
}

export default Keyboard;