import { Component} from 'react';
import CardGame from './CardGameComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import { NOTECARDS } from '../shared/notecards.js';
import PlayASong from './PlayComponent.jsx';
import { PIANOKEYS } from '../shared/pianokeys';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteCards: NOTECARDS,
            pianokeys: PIANOKEYS
            };
        };

  render() {

      return (
          <div>
            <Header />
            <CardGame pianokeys = {this.state.pianokeys} noteCards={this.state.noteCards}/>
            <PlayASong noteCards={this.state.noteCards}/>
            <Menu />
          </div>
      );
  }
}

export default Main;