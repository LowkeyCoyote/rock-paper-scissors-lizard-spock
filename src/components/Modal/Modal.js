import React, { useState } from 'react';
import styles from './Modal.module.css';

import imgRules from '../../assets/images/image-rules-bonus.svg';
import iconClose from '../../assets/icons/icon-close.svg';

export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <div className={styles.buttonModal}>
                <button onClick={toggleModal}>Rules</button>
            </div>

            {modal && (
                <div className={styles.modal}>
                    <div className={styles.overlay}>
                        <div className={styles.modalContent}>
                            <h2>Rules</h2>

                            <div className={styles.imgModal}>
                                <img src={imgRules} alt="" />
                            </div>
                            <div
                                onClick={toggleModal}
                                className={styles.closeModal}
                            >
                                <img src={iconClose} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
