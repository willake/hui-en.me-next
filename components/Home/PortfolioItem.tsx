import styles from '../../styles/Home.module.scss';
import React from 'react';
import classNames from 'classnames';
import { ProjectMeta } from '../../schema';
import { server } from '../../config';

type Props = {
    meta: ProjectMeta
}

const PortfolioItem: React.FC<Props> = ({ meta }) => {

    console.log(meta);

    let background = <style>{}</style>

    return (
        <a title={meta.title} className={styles.portfolioItem} href={meta.id.toString()}>
            <div className={styles.portfolioItemBody} style={{backgroundImage: `url(${server}/${meta.previewImageUrl})`}}>
                <div className={styles.portfolioItemOverlay}></div>
                <div className={styles.portfolioItemText}>
                    <h2 className={styles.portfolioItemTitle}>
                        <span className={classNames('m', 'colorBlack')}>{meta.title}</span>
                    </h2>
                </div>
            </div>
            <div className={styles.portfolioItemTags}>
                {
                    meta.tools.map(tool => (
                        <div key={tool} className={styles.portfolioItemTag}>
                            <span className={classNames('xs', 'colorWhite')}>{tool}</span>
                        </div>
                    ))
                }
            </div>
        </a>
    );
};

export default PortfolioItem;