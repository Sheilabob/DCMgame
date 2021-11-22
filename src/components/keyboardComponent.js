import React, { Component } from 'react';


function playNote(x) {
    const note = new Audio("assets/sound/" + x + ".mp3");
    note.play();
}

// Can an object include a function?  If so, can I map through the keys to create the event listeners?

class Keyboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

// if i made a transparent box under the Keyboard, would that hold the space for it in the app?

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-1 m-2 here">
                        <div className="card" id="keyboardCard">
                            <button className="blackNote dSharp" id="dSharpNote" onClick={() => {playNote("dSharp")}}></button>
                            <button className="blackNote cSharp" id="cSharpNote" onClick={() => {playNote("cSharp")}}></button>
                            <button className="blackNote fSharp" id="fSharpNote" onClick={() => {playNote("fSharp")}}></button>
                            <button className="blackNote gSharp" id="gSharpNote" onClick={() => {playNote("gSharp")}}></button>
                            <button className="blackNote aSharp" id="aSharpNote" onClick={() => {playNote("aSharp")}}></button>

                            <button className="whiteNote cNote" id = "cNote" onClick={() => {playNote("C")}}></button>
                            <button className="whiteNote dNote" id = "dNote" onClick={() => {playNote("D")}}></button>
                            <button className="whiteNote eNote" id = "eNote" onClick={() => {playNote("E")}}></button>
                            <button className="whiteNote fNote" id = "fNote" onClick={() => {playNote("F")}}></button>
                            <button className="whiteNote gNote" id = "gNote" onClick={() => {playNote("G")}}></button>
                            <button className="whiteNote aNote" id = "aNote" onClick={() => {playNote("A")}}></button>
                            <button className="whiteNote bNote" id = "bNote" onClick={() => {playNote("B")}}></button>
                            <img src="assets/images/largeRoom.jpeg" className="keyboardSpaceHolder" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Keyboard;