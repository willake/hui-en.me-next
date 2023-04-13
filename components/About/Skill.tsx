import styles from '../../styles/About.module.scss';
import React from 'react';
import SkillSet from './SkillSet';
import classNames from 'classnames';
import { Section } from 'styles/Common';

type SkillProps = {
  programmingSkill: string[];
  framework: string[];
  knowledge: string[];
};

const Skill: React.FC<SkillProps> = ({
  programmingSkill,
  framework,
  knowledge,
}) => {
  return (
    <Section
      css={{
        alignItems: 'center',
        justifyContent: 'center',
        '@lg': {
          maxWidth: '1000px',
        },
      }}
    >
      <SkillSet title={'Programming Skills'} skills={programmingSkill} />
      <SkillSet title="Software / Framework" skills={framework} />
      <SkillSet title="Collaboration / Knowledge" skills={knowledge} />
    </Section>
  );
};

export default Skill;
