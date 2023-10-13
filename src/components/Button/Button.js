import React, { useEffect, useState } from 'react';
import styles from './Button.module.css';

export default function Button(props) {
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (props.animation === true) {
            setShow(false);
        }
    }, [props.animation]);

    useEffect(() => {
        setTimeout(() => setShow(true), 2000);
    }, [show]);

    return (
        <>
            {show && (
                <div
                    className={
                        props.choice
                            ? props.winner && props.winner !== 'draw'
                                ? props.player === 'computer'
                                    ? `${styles.buttonWrapper} ${styles.buttonContainerWinningAnimation}`
                                    : `${styles.buttonWrapper} ${styles.buttonContainerWinningAnimationWithDelay}`
                                : `${styles.buttonWrapper} ${styles.fadeIn}`
                            : styles.buttonWrapper
                    }
                    style={props.gradient}
                    onClick={props.onClick}
                    choice={props.choice}
                    winner={props.winner}
                    player={props.player}
                >
                    <div className={styles.buttonContainer}>
                        <img src={props.icon} alt="" />
                        
                    </div>
                </div>
            )}
            {!show && <div className={styles.pulsatingCircle}></div>}
        </>
    );
}
