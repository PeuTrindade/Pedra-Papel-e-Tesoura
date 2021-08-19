import React from 'react';
import styles from './Game.module.css';
import background from '../../images/background.svg';
import seassors from '../../images/seassors.svg';
import rock from '../../images/rock.svg';
import paper from '../../images/paper.svg';
import Play from '../Play/Play';

const Game = ({playersChoice,setPlayersChoice,playerWin,houseWin,draw,setPlayerWin,setHouseWin,setDraw,setScore,score}) => {
    function handleClick({target}){
        if(playersChoice.length < 1){
          setPlayersChoice([...playersChoice,+target.id]);  
        }      
    }

    return (
        <section className={styles.container}>
          {playersChoice.length === 0 ? <div className={styles.gameContainer}>
                <img src={background}/>
                <div className={styles.icon1}>
                    <img id='1' onClick={handleClick} src={seassors}/>
                </div>
                <div className={styles.icons}>
                <div className={styles.icon2}>
                    <img id='2' onClick={handleClick} src={rock}/>
                </div>
                <div className={styles.icon3}>
                    <img id='3'  onClick={handleClick} src={paper}/>
                </div>
                </div>
          </div> : <Play score={score} setScore={setScore} setDraw={setDraw} setHouseWin={setHouseWin} setPlayerWin={setPlayerWin} draw={draw} houseWin={houseWin} playerWin={playerWin} setPlayersChoice={setPlayersChoice} playersChoice={playersChoice}/>}
        </section>
    )
}

export default Game;
