import React, { useEffect, useState } from 'react';
import styles from './GridButton.module.css';

import Button from '../Button/Button.js';

import { buttonsStyleDataArray } from '../../datas/ButtonsStyleDataArr/ButtonsStyleDataArray';

export default function GridButton({ onButtonClick }) {
    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
        setFirstRender(false);
    }, []);

    return (
        <div
            className={`${styles.gridButtonContainer} ${
                firstRender ? styles.fadeIn : ''
            }`}
        >
            {buttonsStyleDataArray.map((button, index) => (
                <Button
                    gradient={button.gradient}
                    icon={button.icon}
                    key={index}
                    onClick={() => onButtonClick(button.type)}
                />
            ))}
        </div>
    );
}
