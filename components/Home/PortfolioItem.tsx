import styles from '../../styles/Home.module.scss';
import React from 'react';
import classNames from 'classnames';
import { ProjectMeta } from '../../schema';
import { server } from '../../config';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
    meta: ProjectMeta
}

const PortfolioItem: React.FC<Props> = ({ meta }) => {
    return (
        <Link href={`/projects/${meta.route}`}>
            <a title={meta.title} className={styles.portfolioItem}>
                <div className={styles.portfolioItemBody}>
                    <div className={styles.protfolioBackground}>
                        <Image alt={meta.title} width="1200" height="600" src={`/${meta.previewImageUrl}`} layout="responsive" />
                    </div>
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
                                <span className={classNames('m', 'colorWhite')}>{tool}</span>
                            </div>
                        ))
                    }
                </div>
            </a>
        </Link>
    );
};

export default PortfolioItem;