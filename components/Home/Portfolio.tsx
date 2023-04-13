import styles from '../../styles/Home.module.scss';
import React from 'react';
import PortfolioCategory from './PortfolioCategory';
import { ProjectMeta } from '../../schema';
import { Section } from 'styles/Common';
import { DARK_GRAY } from 'styles/color';

type Props = {
  professionals: ProjectMeta[];
  sides: ProjectMeta[];
};

const Portfolio: React.FC<Props> = ({ professionals, sides }) => {
  return (
    <Section
      id="portfolio"
      css={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '5px',
        paddingVottom: '20px',
        backgroundColor: DARK_GRAY,
      }}
    >
      <PortfolioCategory
        title="Professional Projects"
        projects={professionals}
      />
      <PortfolioCategory title="Side Projects" projects={sides} />
    </Section>
  );
};

export default Portfolio;
