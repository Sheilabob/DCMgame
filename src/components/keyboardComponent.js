import React, { Component } from 'react';
import { NOTECARDS } from '../shared/notecards.js';
import { CUCKOO } from '../shared/cuckoo.js';
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
                <Card>
                        <Button onClick={() => this.onGameStart(this.state.noteCards[this.state.randomNumber])}>Start Game</Button>
                    </Card>
            )
        } 
    }

    renderRestartGameButton(check) {
        if (check.length == 0 && this.state.checkedCard == "/assets/images/hooray.jpeg") {
            return(
                <Card>
                    <CardImg className="responseCard" src="assets/images/gameOver.jpeg" />
                    <h1>Score: {this.state.score}/7</h1>
                    <h2>Wrong answers: {this.state.counter}</h2>
                        <Button onClick={() => this.onGameStart(this.state.noteCards[this.state.randomNumber])}>Restart Game</Button>
                    </Card>
            )
        } 
    }

    playASong(song) {
        let start = 0;
        let i=1

        song.map(note => setTimeout(function(){ playNote(note.name); }, start += note.length));
    }
        
        // setTimeout(function(){ playNote("G"); }, start += 500);
        // setTimeout(function(){ playNote("E"); }, start += 1000);
        // setTimeout(function(){ playNote("D"); }, start += 500);
        // setTimeout(function(){ playNote("C"); }, start += 500);
        // setTimeout(function(){ playNote("D"); }, start += 500);
        // setTimeout(function(){ playNote("E"); }, start += 500);
        // setTimeout(function(){ playNote("C"); }, start += 1000);
        // setTimeout(function(){ playNote("G"); }, start += 500);
        // setTimeout(function(){ playNote("E"); }, start += 1000);
        // setTimeout(function(){ playNote("G"); }, start += 500);
        // setTimeout(function(){ playNote("E"); }, start += 1000);
        // setTimeout(function(){ playNote("D"); }, start += 500);
        // setTimeout(function(){ playNote("E"); }, start += 500);
        // setTimeout(function(){ playNote("D"); }, start += 500);
        // setTimeout(function(){ playNote("C"); }, start += 500);

    

    renderNextCardButton(check) {
        if (check.length > 0 && this.state.checkedCard == "/assets/images/hooray.jpeg" ) {
            return(
                <Card>
                <Button onClick={() => this.nextCard(this.state.gameCards[this.state.randomNumber])}>Next Card</Button>
            </Card>
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
       if (notecard && this.state.checkedCard !== "/assets/images/hooray.jpeg") {if (notecard.name === x) {
            this.setState({checkedCard: "/assets/images/hooray.jpeg"});
        } else {
            this.setState({checkedCard: "/assets/images/tryagain.jpeg"});
            this.setState({counter: this.state.counter + 1});
        };}
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
        // if (checkedcard && this.state.gameCards.length === 0) {
        //     return (
        //         <Card>
        //             <CardImg className="responseCard" src={checkedcard} />
        //             <CardImg className="responseCard" src="assets/images/gameOver.jpeg" />
        //         </Card>
                
        //     )
        // }
        
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

                            <button className={this.state.buttons[0] === true ? "whiteNote": "whiteNoteClicked"} id = "cNote" onClick={() => {playNote("C"); this.checkTheCard(this.state.currentCard, "C"); this.changeTheNote(this.state.currentCard, "C", 0);}} ></button>
                            <button className={this.state.buttons[1] === true ? "whiteNote": "whiteNoteClicked"} id = "dNote" onClick={() => {playNote("D"); this.checkTheCard(this.state.currentCard, "D"); this.changeTheNote(this.state.currentCard, "D", 1);}} ></button>
                            <button className={this.state.buttons[2] === true ? "whiteNote": "whiteNoteClicked"} id = "eNote" onClick={() => {playNote("E"); this.checkTheCard(this.state.currentCard, "E"); this.changeTheNote(this.state.currentCard, "E", 2);}} ></button>
                            <button className={this.state.buttons[3] === true ? "whiteNote": "whiteNoteClicked"} id = "fNote" onClick={() => {playNote("F"); this.checkTheCard(this.state.currentCard, "F"); this.changeTheNote(this.state.currentCard, "F", 3);}} ></button>
                            <button className={this.state.buttons[4] === true ? "whiteNote": "whiteNoteClicked"} id = "gNote" onClick={() => {playNote("G"); this.checkTheCard(this.state.currentCard, "G"); this.changeTheNote(this.state.currentCard, "G", 4);}} ></button>
                            <button className={this.state.buttons[5] === true ? "whiteNote": "whiteNoteClicked"} id = "aNote" onClick={() => {playNote("A"); this.checkTheCard(this.state.currentCard, "A"); this.changeTheNote(this.state.currentCard, "A", 5);}} ></button>
                            <button className={this.state.buttons[6] === true ? "whiteNote": "whiteNoteClicked"} id = "bNote" onClick={() => {playNote("B"); this.checkTheCard(this.state.currentCard, "B"); this.changeTheNote(this.state.currentCard, "B", 6);}} ></button>
                            {/* <img src="assets/images/largeRoom.jpeg" className="keyboardSpaceHolder" /> */}
                        </div>
                    </div>
                    <div className="col-5">

                    </div>
                    <div className="col">
                        <button onClick={() => {this.playASong(this.state.cuckoo)}}>Play a Song</button>
                    
                    {this.renderStartGameButton(this.state.gameCards)}
                    {this.renderRestartGameButton(this.state.gameCards)}
                    {this.renderNextCardButton(this.state.gameCards)}                    

                    {this.renderCurrentCard(this.state.currentCard)}
                    {this.renderResponse(this.state.checkedCard)}
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default Keyboard;