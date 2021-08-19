import React from 'react';
import styles from './Score.module.css';

const Score = ({score}) => {
    return (
        <section className={styles.scoreContainer}>
            <div className={styles.score}>
                <h2>Rock,paper,scissors</h2>
                <div className={styles.points}>
                    <p>score</p>
                    <h3>{score}</h3>
                </div>
            </div>
        </section>
    )
}

export default Score;
