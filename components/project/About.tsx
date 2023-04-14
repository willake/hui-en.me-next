import React from 'react';
import styles from '../../styles/project.module.scss';
import { Section, Text, TextSpan } from 'styles/Common';
import { styled } from 'styles';
import { GRAY } from 'styles/color';

type Props = {
  type: string;
  size: string;
  language: string;
  role: string;
};

const About: React.FC<Props> = ({ type, size, language, role }) => {
  return (
    <Section id="about" css={{ alignItems: 'center', padding: '10px' }}>
      <InfoTable>
        <TBody>
          <Tr>
            <Td className={styles.aboutTableItemTitle}>
              <TextSpan size={'l'} textColor={'gray'}>
                Project Type
              </TextSpan>
            </Td>
            <Td className={styles.aboutTableItemContent}>
              <TextSpan size={'l'} textColor={'black'}>
                {type} Project
              </TextSpan>
            </Td>
          </Tr>
          <Tr>
            <Td className={styles.aboutTableItemTitle}>
              <TextSpan size={'l'} textColor={'gray'}>
                Team Size
              </TextSpan>
            </Td>
            <Td className={styles.aboutTableItemContent}>
              <TextSpan size={'l'} textColor={'black'}>
                {size}
              </TextSpan>
            </Td>
          </Tr>
          <Tr>
            <Td className={styles.aboutTableItemTitle}>
              <TextSpan size={'l'} textColor={'gray'}>
                Language
              </TextSpan>
            </Td>
            <Td className={styles.aboutTableItemContent}>
              <TextSpan size={'l'} textColor={'black'}>
                {language}
              </TextSpan>
            </Td>
          </Tr>
          <Tr>
            <Td className={styles.aboutTableItemTitle}>
              <TextSpan size={'l'} textColor={'gray'}>
                Role
              </TextSpan>
            </Td>
            <Td className={styles.aboutTableItemContent}>
              <TextSpan size={'l'} textColor={'black'}>
                {role}
              </TextSpan>
            </Td>
          </Tr>
        </TBody>
      </InfoTable>
    </Section>
  );
};

export default About;

const InfoTable = styled('table', {
  border: '2px solid',
  borderColor: GRAY,
  borderRadius: '2px',
});

const TBody = styled('tbody', {});

const Tr = styled('tr', {});
const Td = styled('td', {});
