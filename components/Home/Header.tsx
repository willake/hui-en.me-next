import styles from '../../styles/Home.module.scss';
import React, { useRef } from 'react';
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';

const Header: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayVideo = () => {
        if(videoRef.current !== null) {
            videoRef.current.play();
        }
    }

    setTimeout(() => {
        if(!isMobile) handlePlayVideo();
    }, 200);

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <video id="headerVideo" ref={videoRef} className={styles.headerVideo} loop={true} muted={true} preload="preload">
                        <source src="/videos/portfolio.mp4" type="video/mp4" />
                        <source src="/videos/portfolio.webm" type="video/webm" />
                </video>
                <div className={styles.headerOverlay}>
                </div>
                <div className={styles.headerTexts}>
                    <h1 className={styles.headerTitle}>
                        <span className={classNames('xxl', 'colorWhite')}>- Hui En Lin -</span>
                    </h1>
                    <h2 className={styles.headerSubtitle}>
                        <span className={classNames('xl', 'colorWhite')}>Gameplay Programmer</span>
                    </h2>
                </div>
            </div>
        </header>
    );
};

export default Header;