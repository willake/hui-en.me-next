import styles from '../../styles/About.module.scss';
import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { Box, Button, Section, Text } from 'styles/Common';
import { styled } from 'styles';
import { GREEN, textColors } from 'styles/color';

type IntroProps = {
  intro: string[];
};

const Intro: React.FC<IntroProps> = ({ intro }) => {
  return (
    <Section
      id="intro"
      css={{
        alignItems: 'center',
        padding: '0 30px',
        '@lg': {
          justifyContent: 'center',
          padding: '10px 15%',
        },
      }}
    >
      <Box>
        <Avatar>
          <Image
            src="/images/about/me.jpg"
            alt="me"
            width="160"
            height="160"
            layout="responsive"
          />
        </Avatar>
      </Box>
      <Box css={{ maxWidth: '800px' }}>
        {intro.map((text) => (
          <Box css={{ textAlign: 'center', margin: '10px 0', lineHeight: 1.5 }}>
            <Text size={'l'} textColor={'black'}>
              {text}
            </Text>
          </Box>
        ))}
      </Box>
      <Button
        css={{
          margin: '10px 0',
          padding: '10px 15px',
          backgroundColor: GREEN,
          borderRadius: '10px',
        }}
      >
        <a title="CV" href="/cv.pdf" target="_blank" rel="noopener noreferrer">
          <Text size={'l'} textColor={'white'}>
            CV PDF
          </Text>
        </a>
      </Button>
    </Section>
  );
};

export default Intro;

const Avatar = styled(Box, {
  position: 'relative',
  width: '128px',
  height: '128px',
  margin: '10px 0',
  '@lg': {
    width: '150px',
    height: '150px',
  },
  img: {
    borderRadius: '50%',
  },
});
