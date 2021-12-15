import styles from '../../styles/Home.module.scss';
import React from 'react';
import classNames from 'classnames';
import { ProjectMeta } from '../../schema';
import PortfolioItem from './PortfolioItem';

type Props = {
    title: string,
    projects: ProjectMeta[]
}

const PortfolioCategory: React.FC<Props> = ({ title, projects }) => {

    return (
        <>
            <h2 className={styles.portfolioTitle}>
                <span className={classNames('l', 'colorBlack')}>{title}</span>
            </h2>
            <div className={styles.portfolioRow}>
                {projects.map((project) => {
                    <PortfolioItem meta={project} /> 
                })}
            </div>
        </>
    );
};

export default PortfolioCategory;