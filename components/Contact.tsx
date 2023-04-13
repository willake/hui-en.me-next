import { FaGithub, FaItchIo, FaLinkedin, FaTwitter } from 'react-icons/fa';
import React from 'react';
import { Box, Button, HFlex, Section, Text } from 'styles/Common';
import { IconType } from 'react-icons';
import { styled } from 'styles';
import { WHITE } from 'styles/color';

const Contact: React.FC = () => {
  return (
    <Section id="contact">
      <Button>
        <a
          title="Email Contact"
          href="mailto:willakelin@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text size="l" textColor="white">
            Contact me
          </Text>
        </a>
      </Button>
      <Box>
        <Text size="l" textColor={'black'}>
          huienlin.game@gmail.com
        </Text>
      </Box>
      <HFlex>
        {contactInfos.map((info) => (
          <Link key={info.id}>
            <a
              title={info.name}
              href={info.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {React.createElement(info.icon, {
                size: '32',
                color: WHITE,
              })}
            </a>
          </Link>
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
    url: 'https://twitter.com/WillakeLin/',
    icon: FaTwitter,
  },
  {
    id: 3,
    name: 'Itch.io Account',
    url: 'https://huienlin.itch.io/',
    icon: FaItchIo,
  },
];

const Link = styled(Box, {
  '@lg': {
    margin: '15px 10px',
    transition: '0.2s ease',
  },
  ':hover': {
    '@lg': { transform: 'scale(1.1)' },
  },
});

// .contactButtonLink {
//   display: block;
//   background-color: #0b2027;
//   padding: 10px 20px;
//   border-radius: 5px;

//   @media screen and (min-width: $lg){
//       transition: 0.2s ease;
//   }

//   &:hover {
//       @media screen and (min-width: $lg){
//           transform: scale(1.1);
//           color: white;
//       }
//   }
// }
