import { Component} from 'react';
import CardGame from './CardGameComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import { NOTECARDS } from '../shared/notecards.js';
import PlayASong from './PlayComponent.jsx';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteCards: NOTECARDS
            };
        };

  render() {

      return (
          <div>
            <Header />
            <CardGame noteCards={this.state.noteCards}/>
            <PlayASong noteCards={this.state.noteCards}/>
            <Menu />
          </div>
      );
  }
}

export default Main;