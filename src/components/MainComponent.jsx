import { Component} from 'react';
import Keyboard from './keyboardComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            };
        };

  render() {

      return (
          <div>
            <Header />
            <Keyboard />
          </div>
      );
  }
}

export default Main;