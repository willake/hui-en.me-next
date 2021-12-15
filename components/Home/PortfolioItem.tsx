import styles from '../../styles/Home.module.scss';
import React from 'react';
import classNames from 'classnames';

type Props = {
    link: string,
    previewImageLink: string,
    title: string,
    usedTools: string[]
}

const PortfolioItem: React.FC<Props> = ({ link, previewImageLink, title, usedTools }) => {

    let background = <style>{}</style>

    return (
        <a title={title} className={styles.portfolioItem} href={link}>
            <div className={styles.portfolioItemBody}>
                <div className={styles.portfolioItemOverlay}></div>
                <div className={styles.portfolioItemText}>
                    <h2 className={styles.portfolioItemTitle}>{title}</h2>
                </div>
            </div>
            <div className={styles.portfolioItemTags}>
                {
                    usedTools.map(tool => (
                        <div className={styles.portfolioItemTag}>
                            <span className={classNames('s', 'colorWhite')}>{tool}</span>
                        </div>
                    ))
                }
            </div>
        </a>
    );
};

export default PortfolioItem;