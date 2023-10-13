import React, { useEffect, useState } from 'react';
import styles from './ScoreCard.module.css';

import logoImg from '../../assets/images/logo-bonus.svg';

export default function ScoreCard(props) {
    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
        setFirstRender(false);
    }, []);

    return (
        <div
            className={`${styles.scoreCard} ${
                firstRender ? styles.fadeIn : ''
            }`}
        >
            <div className={styles.options}>
                <img src={logoImg} alt="" />
            </div>
            <div className={styles.score}>
                <h1>Score</h1>
                <span>{props.score}</span>
            </div>
        </div>
    );
}
