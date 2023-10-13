import React from 'react';
import styles from './ResultComponent.module.css';

export default function ResultComponent({ result, playAgainclick, animation }) {
    return (
        <div className={styles.resultContainer}>
            <p>{result}</p>
            <button onClick={playAgainclick}>Play again</button>
        </div>
    );
}
