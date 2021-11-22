import { Component} from 'react';
import Directory from './DirectoryComponent';
import { ROOMS } from '../shared/rentalRooms.js';
import Keyboard from './keyboardComponent';
import KeyboardMenu from './KeyboardMenuComponent';
import Trying from './testingSoundComponent';
import RoomInfo from './RoomInfo.js';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: ROOMS,
            };
        };

  render() {

    const HomePage = () => {
        return (
            <Home />
        )
    }
      return (
          <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/directory' render={() => <Directory  rooms={this.state.rooms} />} />
                <Redirect to='/home' />
            </Switch>
              {/* <Keyboard /> */}
              {/* <div className="container">
                  <div className="row">
                    <KeyboardMenu />
                    <div className="col-1">
                    </div>
                    <div className="col-2">
                    <Trying />
                    </div>
                    <div className="col-6">
                    <Directory  rooms={this.state.rooms} />
                    </div>
                  </div>
              </div> */}
              <Footer />
          </div>
      );
  }
}

export default Main;