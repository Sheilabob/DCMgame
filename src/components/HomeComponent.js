import React, {Component} from 'react';
import { Card } from 'reactstrap';

class Home extends Component {
    
    render() {
        const keys = this.props.pianokeys.map(key => {
            return (
                <button className={key.className} id={key.id} onClick={() => {key.playNote()}}>
                </button>
            );
        });

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
                </div>
            </div>
        );
    }
}

export default Home;   