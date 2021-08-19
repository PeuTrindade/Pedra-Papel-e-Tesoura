import React from 'react';
import styles from './Play.module.css';
import seassors from '../../images/seassors.svg';
import rock from '../../images/rock.svg';
import paper from '../../images/paper.svg';

const Play = ({playersChoice,setPlayersChoice,playerWin,houseWin,draw,setHouseWin,setPlayerWin,setDraw,setScore,score}) => {
    React.useEffect(() => {
        const randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
        setPlayersChoice([...playersChoice,randomNumber]);
        console.log(randomNumber);
    },[]);

    React.useEffect(() => {
        if(playersChoice[0] === 1 && playersChoice[1] === 2){
            setHouseWin(true);
        }
        else if(playersChoice[0] === 1 && playersChoice[1] === 3){
            setPlayerWin(true);
            setScore(score + 1);
        }
        else if(playersChoice[0] === playersChoice[1]){
            setDraw(true);
        }
        else if(playersChoice[0] === 2 && playersChoice[1] === 1){
            setPlayerWin(true);
            setScore(score + 1);
        }
        else if(playersChoice[0] === 2 && playersChoice[1] === 3){
            setHouseWin(true);
        }
        else if(playersChoice[0] === 3 && playersChoice[1] === 1){
            setHouseWin(true);
        }
        else if(playersChoice[0] === 3 && playersChoice[1] === 2){
            setPlayerWin(true);
            setScore(score + 1);
        }
    },[playersChoice]);

    function handleClick(){
        setHouseWin(false);
        setPlayerWin(false);
        setDraw(false);
        setPlayersChoice([]);
    }

    return (
        <>
        <section className={styles.container}>
            <div className={styles.playerImg}>
                <h4>You picked</h4>
                <img className={playersChoice[0] === 1 && styles.img1 || playersChoice[0] === 2 && styles.img2 || playersChoice[0] === 3 && styles.img3} src={playersChoice[0] === 1 && seassors || playersChoice[0] === 2 && rock || playersChoice[0] === 3 && paper}/>
            </div>
            <div className={styles.homeImg}>
                <h4>The house picked</h4>
                <img className={playersChoice[1] === 1 && styles.img1 || playersChoice[1] === 2 && styles.img2 || playersChoice[1] === 3 && styles.img3} src={playersChoice[1] === 1 && seassors || playersChoice[1] === 2 && rock || playersChoice[1] === 3 && paper}/>
            </div>
        </section>
        <section className={styles.result}>
            <h2>{playerWin && 'YOU WIN' || houseWin && 'YOU LOSE' || draw && 'THE MATCH TIED'}</h2>
            <button onClick={handleClick}>PLAY AGAIN</button>
        </section>
        </>
    )
}

export default Play;
