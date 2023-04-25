import { FaGithub, FaItchIo, FaLinkedin, FaTwitter } from 'react-icons/fa';
import React from 'react';
import {
  Box,
  Button,
  Group,
  HFlex,
  Section,
  Text,
  TextSpan,
} from 'styles/Common';
import { IconType } from 'react-icons';
import { styled } from 'styles';
import { BLACK, DARK_GREEN, GREEN, WHITE } from 'styles/color';

const Contact: React.FC = () => {
  return (
    <Section id="contact" css={{ alignItems: 'center' }}>
      <Button
        title="Email Contact"
        href="mailto:willakelin@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        css={{
          marginTop: '40px',
          marginBottom: '20px',
          padding: '10px 20px',
          backgroundColor: DARK_GREEN,
          borderRadius: 5,
        }}
      >
        <TextSpan size="l" textColor="white">
          Contact me
        </TextSpan>
      </Button>
      <Box>
        <Text size="l" textColor={'black'}>
          huienlin.game@gmail.com
        </Text>
      </Box>
      <HFlex>
        {contactInfos.map((info) => (
          <Group
            key={info.id}
            css={{
              transition: '.2s ease-in',
              margin: '15px 10px',
              '@lg': {
                ':hover': {
                  transform: 'scale(1.05)',
                  color: GREEN,
                },
              },
            }}
          >
            <Link
              title={info.name}
              href={info.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {React.createElement(info.icon, {
                size: '32',
                color: BLACK,
                style: {
                  transition: '.2s ease-in',
                },
              })}
            </Link>
          </Group>
        ))}
      </HFlex>
    </Section>
  );
};

export default Contact;

export type ContactInfo = {
  id: number;
  name: string;
  url: string;
  icon: IconType;
};

const contactInfos: ContactInfo[] = [
  {
    id: 0,
    name: 'LinkedIn Contact',
    url: 'https://www.linkedin.com/in/willakelin/',
    icon: FaLinkedin,
  },
  {
    id: 1,
    name: 'Github Contact',
    url: 'https://github.com/willake/',
    icon: FaGithub,
  },
  {
    id: 2,
    name: 'Twitter Contact',
    url: 'https://twitter.com/hui_gamedev/',
    icon: FaTwitter,
  },
  {
    id: 3,
    name: 'Itch.io Account',
    url: 'https://huienlin.itch.io/',
    icon: FaItchIo,
  },
];

const Link = styled('a', {
  position: 'relative',
  display: 'block',
  transition: '.2s ease-in',
  margin: '15px 10px',
});
