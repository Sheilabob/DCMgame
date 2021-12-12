import React, { Component } from 'react';
import { Card, CardImg, Button } from 'reactstrap';


class CardGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteCards: this.props.noteCards,
            buttons: this.props.noteCards.map(card => card.button),
            currentCard: null,
            checkedCard: null,
            randomNumber: Math.floor(Math.random() * (this.props.noteCards.length)),
            gameCards: [],
            startTheGame: true,
            counter: 0,
            score: 1,
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

        const keys = this.props.pianokeys.map((key, index) => {
            return (
                <button className={key.className} id={key.id} onClick={() => {key.playNote(); this.checkTheCard(this.state.currentCard, key.noteName, index)}}>
                </button>
            )
        })

        return (
            <div className="container">
                <div className="row">
                    <div className="col-9 col-sm-8 col-md-6 col-lg-5 col-xl-4 m-1 here">
                        <Card className="keyboardCard">
                            <div id="keyboardCard">
                                {keys}
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
            </div>
        );
    }
}

export default CardGame;