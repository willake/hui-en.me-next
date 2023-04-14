import React from 'react';
import { Button, TextSpan } from 'styles/Common';

type Props = {
  title: string;
  href: string;
};

const Link: React.FC<Props> = ({ title, href, children }) => {
  return (
    <Button
      title={title}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      css={{
        margin: '10px 0',
        padding: '10px 15px',
        borderRadius: '10px',
      }}
    >
      <TextSpan size={'l'} textColor={'white'}>
        {children}
      </TextSpan>
    </Button>
  );
};

export default Link;
