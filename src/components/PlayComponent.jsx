import React, { Component } from 'react';
import { CUCKOO } from '../shared/cuckoo.js';
import { Card, CardImg, Button } from 'reactstrap';



function playNote(x) {
    const note = new Audio("assets/sound/" + x + ".mp3");
    note.play();
}

class PlayASong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteCards: this.props.noteCards,
            buttons: this.props.noteCards.map(card => card.button),
            cuckoo: CUCKOO
        };
    }



    playASong(song) {
        let start = 0;
        let i=1

        song.map(note => setTimeout(() => {

            this.setState({buttons: [...this.state.buttons.slice(0, note.i), false, ...this.state.buttons.slice(note.i+1)]});
        setTimeout(() => {this.setState({buttons: this.state.noteCards.map(card => card.button)})}, 400);

            playNote(note.name); }, start += note.length));
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

                                <button className={this.state.buttons[0] === true ? "whiteNote": "whiteNoteClicked"} id = "cNote" onClick={() => {playNote("C")}} ></button>
                                <button className={this.state.buttons[1] === true ? "whiteNote": "whiteNoteClicked"} id = "dNote" onClick={() => {playNote("D")}} ></button>
                                <button className={this.state.buttons[2] === true ? "whiteNote": "whiteNoteClicked"} id = "eNote" onClick={() => {playNote("E")}} ></button>
                                <button className={this.state.buttons[3] === true ? "whiteNote": "whiteNoteClicked"} id = "fNote" onClick={() => {playNote("F")}} ></button>
                                <button className={this.state.buttons[4] === true ? "whiteNote": "whiteNoteClicked"} id = "gNote" onClick={() => {playNote("G")}} ></button>
                                <button className={this.state.buttons[5] === true ? "whiteNote": "whiteNoteClicked"} id = "aNote" onClick={() => {playNote("A")}} ></button>
                                <button className={this.state.buttons[6] === true ? "whiteNote": "whiteNoteClicked"} id = "bNote" onClick={() => {playNote("B")}} ></button>
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

export default PlayASong;