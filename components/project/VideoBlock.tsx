import React from 'react';
import { Group } from 'styles/Common';
import { styled } from 'styles';

type Props = {
  title: string;
  src: string;
  frameborder: string;
  allow: string;
};

const VideoBlock: React.FC<Props> = ({ title, src, frameborder, allow }) => {
  return (
    <Group
      css={{
        width: '100%',
        paddingBottom: 'calc(56.25% - 20px)',
        margin: '10px 0',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
        alignSelf: 'center',
        '@lg': {
          width: '600px',
          paddingBottom: 'calc(600px * 0.5625)',
        },
      }}
    >
      <IFrame src={src} title={title} allow={allow} allowFullScreen></IFrame>
    </Group>
  );
};

export default VideoBlock;

const IFrame = styled('iframe', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});
