import React, { Component } from 'react';
import { CUCKOO } from '../shared/cuckoo.js';
import { Card, Button } from 'reactstrap';



function playNote(x) {
    const note = new Audio("assets/sound/" + x + ".mp3");
    note.play();
};

class PlayASong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteCards: this.props.noteCards,
            buttons: this.props.noteCards.map(card => card.button),
            cuckoo: CUCKOO,
            songNote: 0,
            mistake: false,
            endofsong: false
        };
    }

    playASong(song) {
        let start = 0;
        song.map(note => setTimeout(
            () => {
                this.setState({buttons: [...this.state.buttons.slice(0, note.i), false, ...this.state.buttons.slice(note.i+1)]});
                setTimeout(() => {this.setState({buttons: this.state.noteCards.map(card => card.button)})}, 400);
                playNote(note.name); 
            },
            start += note.length
        ));
    }

    checkANote(song, note) {
        if (this.state.mistake === true) {
            this.setState({
                noteCards: this.props.noteCards,
                buttons: this.props.noteCards.map(card => card.button),
                cuckoo: CUCKOO,
                songNote: 0,
                mistake: false,
                endofsong: false
            });
        }
        else if (this.state.songNote < song.length) {
            let currentNote = song[this.state.songNote].name
            if (currentNote === note) {
                this.setState({songNote: this.state.songNote +1})
                if (this.state.songNote === song.length-1) {
                    this.setState({endofsong: true});
                }
            } else {
                this.setState({mistake: true});
            }
        }
    }

   renderOopsGameOver(mistake) {
        if (mistake) {
            return(
                <div>
                    <h2>Oops! Mistake!</h2>
                    <h4> You got {this.state.songNote} notes of the song! </h4>
                </div>
            );
        } else {
           return (
               <div></div>
           );
        }
    }

   renderYayGameOver(endofsong) {
    if (endofsong) {
        return(
            <div>
                <h2>Yay!  You got the whole song!</h2>
            </div>
        );
    } else {
        return (
            <div></div>
        );
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

                                <button className={this.state.buttons[0] === true ? "whiteNote": "whiteNoteClicked"} id = "cNote" onClick={() => {playNote("C"); this.checkANote(this.state.cuckoo, "C")}} ></button>
                                <button className={this.state.buttons[1] === true ? "whiteNote": "whiteNoteClicked"} id = "dNote" onClick={() => {playNote("D"); this.checkANote(this.state.cuckoo, "D")}} ></button>
                                <button className={this.state.buttons[2] === true ? "whiteNote": "whiteNoteClicked"} id = "eNote" onClick={() => {playNote("E"); this.checkANote(this.state.cuckoo, "E")}} ></button>
                                <button className={this.state.buttons[3] === true ? "whiteNote": "whiteNoteClicked"} id = "fNote" onClick={() => {playNote("F"); this.checkANote(this.state.cuckoo, "F")}} ></button>
                                <button className={this.state.buttons[4] === true ? "whiteNote": "whiteNoteClicked"} id = "gNote" onClick={() => {playNote("G"); this.checkANote(this.state.cuckoo, "G")}} ></button>
                                <button className={this.state.buttons[5] === true ? "whiteNote": "whiteNoteClicked"} id = "aNote" onClick={() => {playNote("A"); this.checkANote(this.state.cuckoo, "A")}} ></button>
                                <button className={this.state.buttons[6] === true ? "whiteNote": "whiteNoteClicked"} id = "bNote" onClick={() => {playNote("B"); this.checkANote(this.state.cuckoo, "B")}} ></button>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    Directions: Listen to the song.  Then, try to play back as many notes as you can.  If you mess up, just listen again to start over. Good Luck!
                    <Button color='info' onClick={() => {
                        this.playASong(this.state.cuckoo);
                        this.setState({
                            noteCards: this.props.noteCards,
                            buttons: this.props.noteCards.map(card => card.button),
                            cuckoo: CUCKOO,
                            songNote: 0,
                            mistake: false,
                            endofsong: false
                        });
                        }}>Listen
                    </Button>
                    {this.renderOopsGameOver(this.state.mistake)}
                    {this.renderYayGameOver(this.state.endofsong)}
                </div>
            </div>
        );
    }
}

export default PlayASong;