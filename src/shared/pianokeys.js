export const PIANOKEYS = [
    {
        index: 0,
        noteName: 'C',
        className: 'whiteNote',
        id: 'cNote',
        playNote() {
            const note = new Audio("assets/sound/C.mp3");
            note.play();
        },
        soundSource: 'assets/sound/C.mp3'
    },
    {
        index: 1,
        noteName: 'D',
        className: 'whiteNote',
        id: 'dNote',
        playNote() {
            const note = new Audio("assets/sound/D.mp3");
            note.play();
        },
        soundSource: 'assets/sound/D.mp3'
    },
    {
        index: 2,
        noteName: 'E',
        className: 'whiteNote',
        id: 'eNote',
        playNote() {
            const note = new Audio("assets/sound/E.mp3");
            note.play();
        },
        soundSource: 'assets/sound/E.mp3'
    },
    {
        index: 3,
        noteName: 'F',
        className: 'whiteNote',
        id: 'fNote',
        playNote() {
            const note = new Audio("assets/sound/F.mp3");
            note.play();
        },
        soundSource: 'assets/sound/F.mp3'
    },
    {
        index: 4,
        noteName: 'G',
        className: 'whiteNote',
        id: 'gNote',
        playNote() {
            const note = new Audio("assets/sound/G.mp3");
            note.play();
        },
        soundSource: 'assets/sound/G.mp3'
    },
    {
        index: 5,
        noteName: 'A',
        className: 'whiteNote',
        id: 'aNote',
        playNote() {
            const note = new Audio("assets/sound/A.mp3");
            note.play();
        },
        soundSource: 'assets/sound/A.mp3'
    },
    {
        index: 6,
        noteName: 'B',
        className: 'whiteNote',
        id: 'bNote',
        playNote() {
            const note = new Audio("assets/sound/B.mp3");
            note.play();
        },
        soundSource: 'assets/sound/B.mp3'
    },
    {
        index: 7,
        noteName: 'CSharp',
        className: 'blackNote',
        id: 'cSharpNote',
        playNote() {
            const note = new Audio("assets/sound/cSharp.mp3");
            note.play();
        },
        soundSource: 'assets/sound/cSharp.mp3'
    },
    {
        index: 8,
        noteName: 'DSharp',
        className: 'blackNote',
        id: 'dSharpNote',
        playNote() {
            const note = new Audio("assets/sound/dSharp.mp3");
            note.play();
        },
        soundSource: 'assets/sound/dSharp.mp3'
    },
    {
        index: 9,
        noteName: 'FSharp',
        className: 'blackNote',
        id: 'fSharpNote',
        playNote() {
            const note = new Audio("assets/sound/fSharp.mp3");
            note.play();
        },
        soundSource: 'assets/sound/fSharp.mp3'
    },
    {
        index: 10,
        noteName: 'GSharp',
        className: 'blackNote',
        id: 'gSharpNote',
        playNote() {
            const note = new Audio("assets/sound/gSharp.mp3");
            note.play();
        },
        soundSource: 'assets/sound/gSharp.mp3'
    },
    {
        index: 11,
        noteName: 'ASharp',
        className: 'blackNote',
        id: 'aSharpNote',
        playNote() {
            const note = new Audio("assets/sound/aSharp.mp3");
            note.play();
        },
        soundSource: 'assets/sound/aSharp.mp3'
    },
]