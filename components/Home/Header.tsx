import styles from '../styles/Home.module.scss';
import React from 'react';

const Header: React.FC = () => {

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                {/* <video id="intro__video" class="intro__video" loop="loop" muted="muted" preload="preload">
                        <source src="{{ $mp4.Permalink }}" type="video/mp4">
                        <source src="{{ $webm.Permalink }}" type="video/webm">
                </video> */}
                <div className={styles.headerOverlay}>
                </div>
                <div className={styles.headerTexts}>
                    <h1 className={styles.headerTitle}>- Hui En Lin -</h1>
                    <h2 className={styles.headerSubtitle}>Gameplay Programmer</h2>
                </div>
            </div>
        </header>
    );
};

export default Header;