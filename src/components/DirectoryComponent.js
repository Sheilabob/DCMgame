import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDirectoryItem({room, onClick}) {
    return (
        <Card onClick={() => onClick(room.id)}>
            <CardImg width="100%" className="photo" src={room.image} alt={room.name} />
            <CardImgOverlay>
                <CardTitle>{room.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

function Directory(props) {

        const directory = props.rooms.map(room => {
            return (
                <div key={room.id} className="col-md-5 m-1">
                    <RenderDirectoryItem room={room} onClick={props.onClick} />
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                {/* <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedRoom(this.state.selectedRoom)}
                    </div>
                </div> */}
            </div>
        );
    
}

export default Directory;