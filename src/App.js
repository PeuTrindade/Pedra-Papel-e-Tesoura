import React from 'react';
import './App.css';
import Game from './components/Game/Game';
import Score from './components/Score/Score';

const App = () => {
    const [playersChoice,setPlayersChoice] = React.useState([]);
    const [playerWin,setPlayerWin] = React.useState(false);
    const [houseWin,setHouseWin] = React.useState(false);
    const [draw,setDraw] = React.useState(false);
    const [score,setScore] = React.useState(0);

    console.log(playerWin);
    console.log(houseWin);
    console.log(draw);

    return (
        <div className='container'>
            <Score score={score}/>
            <Game score={score} setScore={setScore} draw={draw} houseWin={houseWin} playerWin={playerWin} setDraw={setDraw} setHouseWin={setHouseWin} setPlayerWin={setPlayerWin} playersChoice={playersChoice} setPlayersChoice={setPlayersChoice}/>
        </div>
    )
}

export default App;
