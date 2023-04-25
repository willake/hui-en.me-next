import React from 'react';
import { Button, TextSpan, Group } from 'styles/Common';

type Props = {
  title: string;
  href: string;
};

const InlineLink: React.FC<Props> = ({ title, href, children }) => {
  return (
    <Group
      css={{
        width: 'auto',
        maxWidth: '100%',
        margin: '10px 0',
        alignSelf: 'center',
        '@lg': {
          width: 'auto',
          maxWidth: '600px',
        },
      }}
    >
      <Button
        title={title}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        css={{
          display: 'block',
          width: 'fit-content',
          margin: '10px 0',
          padding: '10px 15px',
          borderRadius: '10px',
        }}
      >
        <TextSpan size={'l'} textColor={'white'}>
          {children}
        </TextSpan>
      </Button>
    </Group>
  );
};

export default InlineLink;
