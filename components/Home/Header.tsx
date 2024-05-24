import React, { useRef } from 'react';
import { isMobile } from 'react-device-detect';
import { styled } from 'styles';
import { Box, H1, H2 } from 'styles/Common';
import { DARK_GREEN } from 'styles/color';

const Header: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current !== null) {
      videoRef.current.play();
    }
  };

  setTimeout(() => {
    if (!isMobile) handlePlayVideo();
  }, 200);

  return (
    <HeaderBox>
      <Content>
        <Video
          id="headerVideo"
          ref={videoRef}
          loop={true}
          muted={true}
          preload="preload"
          css={{ userSelect: 'none' }}
        >
          <source src="/videos/portfolio.mp4" type="video/mp4" />
          <source src="/videos/portfolio.webm" type="video/webm" />
        </Video>
        <Overlay />
        <OverlayTitle>
          <H1
            size={'xxxl'}
            textColor={'white'}
            css={{
              letterSpacing: '1px',
              fontWeight: 500,
              userSelect: 'none',
              '@sm': {
                marginTop: '20px',
                marginVottom: '10px',
              },
            }}
          >
            - Hui En Lin -
          </H1>
          <H2
            size={'xxl'}
            textColor={'white'}
            css={{
              letterSpacing: '0.5px',
              fontWeight: 500,
              userSelect: 'none',
            }}
          >
            Software Engineer
          </H2>
        </OverlayTitle>
      </Content>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const Content = styled(Box, {
  position: 'relative',
  width: '100%',
  display: 'none',
  '@lg': {
    width: '800px',
    margin: '30px 0px',
    display: 'block',
  },
});

const Video = styled('video', {
  width: '100%',
  zIndex: 10,
});

const Overlay = styled(Box, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: DARK_GREEN,
  opacity: 0.5,
  zIndex: 15,
});

const OverlayTitle = styled(Box, {
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  top: 0,
  left: 0,
  zIndex: 15,
});
