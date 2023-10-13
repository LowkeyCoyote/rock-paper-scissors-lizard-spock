import React from 'react';
import styles from './ChoicePlayers.module.css';

import Button from '../Button/Button.js';

export default function ChoicePlayers(props) {
    return (
        <div className={styles.choiceContainer}>
            <h2>{props.text}</h2>
            <Button
                gradient={props.gradient}
                icon={props.icon}
                animation={props.animation}
                choice={props.choice}
                winner={props.winner}
                player={props.player}
            />
        </div>
    );
}
