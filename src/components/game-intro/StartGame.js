import * as React from 'react';
import Start from './resources/start.gif';

function StartGame() {

    return (
        <div className="start-game">
            <img src={Start} alt="start" width='100%' />
        </div>
    )
}

export default StartGame