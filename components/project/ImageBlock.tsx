import React from 'react';
import Image from 'next/image';
import { Box, Group } from 'styles/Common';

type Props = {
  alt: string;
  src: string;
  width: number;
  height: number;
};

const ImageBlock: React.FC<Props> = ({ alt, src, width, height }) => {
  return (
    <Group
      css={{
        width: 'auto',
        maxWidth: '100%',
        margin: '10px 0',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
        alignSelf: 'center',
        '@lg': {
          width: 'auto',
          maxWidth: '600px',
        },
      }}
    >
      <Image
        alt={alt}
        src={src}
        width={width}
        height={height}
        layout="intrinsic"
      />
    </Group>
  );
};

export default ImageBlock;
