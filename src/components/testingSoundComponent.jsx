import React from 'react';

function Trying() {

  const playtheSound = new Audio("assets/sound/B.mp3");
 
  return (
    < div >
      <button onClick={() => {playtheSound.play()}}>Play</button>
    </div >
  );
}



export default Trying;