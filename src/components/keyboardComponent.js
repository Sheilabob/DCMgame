import React, { Component } from 'react';


function playCNote() {
    var cNote = new Audio();
    cNote.src = "../assets/sound/C.mp3";
    cNote.play();
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
                            <button className="blackNote dSharp" id="dSharpNote"></button>
                            <button className="blackNote cSharp" id="cSharpNote"></button>
                            <button className="blackNote fSharp" id="fSharpNote"></button>
                            <button className="blackNote gSharp" id="gSharpNote"></button>
                            <button className="blackNote aSharp" id="aSharpNote"></button>

                            <button className="whiteNote cNote" id = "cNote" onClick={playCNote}></button>
                            <button className="whiteNote dNote" id = "dNote"></button>
                            <button className="whiteNote eNote" id = "eNote"></button>
                            <button className="whiteNote fNote" id = "fNote"></button>
                            <button className="whiteNote gNote" id = "gNote"></button>
                            <button className="whiteNote aNote" id = "aNote"></button>
                            <button className="whiteNote bNote" id = "bNote"></button>
                            <img src="assets/images/largeRoom.jpeg" className="keyboardSpaceHolder" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Keyboard;