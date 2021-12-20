import styles from '../../styles/Home.module.scss';
import React from 'react';
import classNames from 'classnames';
import PortfolioCategory from './PortfolioCategory';
import { ProjectMeta } from '../../schema';

type Props = {
    professionals: ProjectMeta[],
    sides: ProjectMeta[]
}

const Portfolio: React.FC<Props> = ({professionals, sides}) => {
    return (
        <section id="portfolio" className={styles.portfolio}>
            <PortfolioCategory
                title="Professional Projects"
                projects={professionals} />
            <PortfolioCategory 
                title="Side Projects"
                projects={sides} />
        </section>
    );
};

export default Portfolio;