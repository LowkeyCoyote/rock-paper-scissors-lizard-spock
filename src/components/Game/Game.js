import React, { useState, useEffect } from 'react';
import styles from './Game.module.css';

import ScoreCard from '../ScoreCard/ScoreCard';
import GridButton from '../GridButton/GridButton';
import ChoicePlayers from '../ChoicePlayers/ChoicePlayers';
import ResultComponent from '../ResultComponent/ResultComponent';
import Modal from '../Modal/Modal';

import { buttonsStyleDataObject } from '../../datas/ButtonsStyleDataObject/ButtonsStyleDataObject';

export default function Game() {
    const initialScore = parseInt(localStorage.getItem('score')) || 0;

    const [ChoicePlayer, setChoicePlayer] = useState(null);
    const [ChoiceComputer, setChoiceComputer] = useState(null);
    const [winner, setWinner] = useState(null);

    const [resultText, setResultText] = useState('');
    const [steps, setSteps] = useState(1);
    const [score, setScore] = useState(initialScore);

    const handleButtonClick = (type) => {
        const choices = ['scissors', 'paper', 'rock', 'spock', 'lizard'];
        setChoicePlayer(type);
        setChoiceComputer(choices[Math.floor(Math.random() * 5)]);
    };

    const handlePlayAgain = (e) => {
        setChoicePlayer(null);
        setChoiceComputer(null);
        setWinner(null);
        setResultText('');
        setSteps(1);
    };

    useEffect(() => {
        if (ChoicePlayer !== null) {
            const handleWinner = (player, computer) => {
                if (player === computer) {
                    setWinner('draw');
                    setResultText('draw');
                    return;
                }

                const playerIsWinning = {
                    scissors: ['lizard', 'paper'],
                    rock: ['scissors', 'lizard'],
                    paper: ['spock', 'rock'],
                    lizard: ['spock', 'paper'],
                    spock: ['scissors', 'rock'],
                };

                if (
                    playerIsWinning[player] &&
                    playerIsWinning[player].includes(computer)
                ) {
                    setWinner(true);
                    setResultText('You won');
                    setScore(score + 1);
                    return;
                } else {
                    setWinner(false);
                    setResultText('You loss');
                    if (score === 0) {
                        return;
                    }
                    setScore(score - 1);
                }
            };
            handleWinner(ChoicePlayer, ChoiceComputer);
        }
    }, [ChoicePlayer, ChoiceComputer]);

    useEffect(() => {
        if (winner !== null) {
            setSteps(2);
            localStorage.setItem('score', score);
        }
    }, [winner, score]);

    return (
        <>
            {steps === 1 && (
                <div className={styles.gameContainer}>
                    <ScoreCard score={score} />
                    <GridButton onButtonClick={handleButtonClick} />
                    <Modal />
                </div>
            )}

            {steps === 2 && (
                <div className={styles.gameContainer}>
                    <ScoreCard score={score} />
                    <div className={styles.choicePlayerContainer}>
                        <ChoicePlayers
                            gradient={{
                                ...buttonsStyleDataObject[ChoiceComputer]
                                    .gradient,
                                animationDelay: '2000ms !important',
                            }}
                            icon={buttonsStyleDataObject[ChoicePlayer].icon}
                            text="You picked"
                            choice={`true`}
                            winner={winner !== 'draw' ? +winner : 'draw'}
                            player="human"
                        />
                        <ResultComponent
                            result={resultText}
                            playAgainclick={handlePlayAgain}
                        />
                        <ChoicePlayers
                            gradient={{
                                ...buttonsStyleDataObject[ChoiceComputer]
                                    .gradient,
                                animationDelay: '0ms !important',
                            }}
                            icon={buttonsStyleDataObject[ChoiceComputer].icon}
                            text="The House Picked"
                            animation={true}
                            choice={`true`}
                            winner={winner !== 'draw' ? +!winner : 'draw'}
                            player="computer"
                        />
                    </div>
                    <Modal />
                </div>
            )}
        </>
    );
}
