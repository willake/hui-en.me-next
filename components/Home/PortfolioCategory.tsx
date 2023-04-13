import React from 'react';
import { ProjectMeta } from '../../schema';
import PortfolioItem from './PortfolioItem';
import { H2, VFlex } from 'styles/Common';
import { styled } from 'styles';

type Props = {
  title: string;
  projects: ProjectMeta[];
};

const PortfolioCategory: React.FC<Props> = ({ title, projects }) => {
  return (
    <>
      <H2 size={'xl'} textColor={'black'} css={{ fontWeight: 400 }}>
        {title}
      </H2>
      <Row>
        {projects.map((project) => (
          <PortfolioItem key={project.id} meta={project} />
        ))}
      </Row>
    </>
  );
};

export default PortfolioCategory;

const Row = styled(VFlex, {
  alignItems: 'center',
  justifyContent: 'center',
  '@sm': {
    maxWidth: 'calc(100% - 80px)',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '0 40px',
  },
  '@lg': {
    maxWidth: '1200px',
    padding: '0 40px',
  },
});
