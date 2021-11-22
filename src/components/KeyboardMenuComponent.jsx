import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class KeyboardMenu extends React.Component {


    // constructor() {
    //     super();
    //     this.playBNote = this.playBNote.bind(this);
    // }
   
    // };

    // playBNote() {
    //     const b = new Audio();
    //     b.src = "../public/assets/sound/B.mp3";
    //     b.play();
    // }
//     const f = document.getElementById("fNoteBtn");
// f.addEventListener('click', playFNote);
// f.addEventListener('click', redirectToResources);
// function playFNote() {
//     var fNote = new Audio()
//     fNote.src="/sound/F.mp3";
//     fNote.play();
// }
    
    render() { 

        function playBNote() {
            let audio = new Audio;
            audio.src="/sounds/B.mp3";
                audio.play()
            }
        
        

        return (
        <div className="col-3">

            <button className="blackNote topOfTwo" id="dSharpNoteBtn">inactive</button>
            <button className="blackNote bottomOfTwo" id="cSharpNoteBtn">inactive</button>
            <button className="blackNote topOfThree" id="aSharpNoteBtn">inactive</button>
            <button className="blackNote middleOfThree" id="gSharpNoteBtn">inactive</button>
            <button className="blackNote bottomOfThree" id="fSharpNoteBtn">inactive</button>


            <button className="whiteNote" id="bNoteBtn" onClick={playBNote()}><Link to='/home'>Home</Link></button>
            <button className="whiteNote" id="aNoteBtn"><Link to='/directory'>About</Link></button>
            <button className="whiteNote" id="gNoteBtn">Calendar</button>
            <button className="whiteNote" id="fNoteBtn">Resources</button>
            <button className="whiteNote holder" id="eNoteBtn">?</button>
            <button className="whiteNote holder" id="dNoteBtn">?</button>
            <button className="whiteNote holder" id="cNoteBtn">?</button>

        </div>);
    }
}


 
export default KeyboardMenu;