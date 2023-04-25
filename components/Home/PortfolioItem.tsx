import React from 'react';
import { ProjectMeta } from '../../schema';
import Link from 'next/link';
import Image from 'next/image';
import { styled } from 'styles';
import { Box, Group, H2, HFlex, Text, VFlex } from 'styles/Common';
import { BLACK, GREEN, SHADOW, WHITE } from 'styles/color';

type Props = {
  meta: ProjectMeta;
};

const PortfolioItem: React.FC<Props> = ({ meta }) => {
  return (
    <Link href={`/projects/${meta.route}`}>
      <Card title={meta.title}>
        <CardBody>
          <Box css={{ width: '100%', zIndex: 5 }}>
            <Image
              alt={meta.title}
              width="1200"
              height="600"
              src={`/${meta.previewImageUrl}`}
              layout="responsive"
            />
          </Box>
          <Overlay />
          <OverlayTitle>
            <H2
              size={'m'}
              textColor={'black'}
              css={{ marginRight: '10px', fontWeight: 500 }}
            >
              {meta.title}
            </H2>
          </OverlayTitle>
        </CardBody>
        <Tags>
          {meta.tools.map((tool) => (
            <Tag key={tool}>
              <Text
                size={'m'}
                textColor={'white'}
                css={{
                  letterSpacing: '0.5px',
                  textAlign: 'center',
                  fontWeight: 500,
                }}
              >
                {tool}
              </Text>
            </Tag>
          ))}
        </Tags>
      </Card>
    </Link>
  );
};

export default PortfolioItem;

const Card = styled('a', {
  cursor: 'pointer',
  position: 'relative',
  width: '300px',
  height: '150px',
  marginBottom: '60px',
  '@sm': {
    width: '250px',
    height: '125px',
    margin: '10px 10px 40px 10px',
  },
  '@lg': {
    width: '300px',
    height: '150px',
  },
});

const CardBody = styled(Group, {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  borderRadius: '5px',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  boxShadow: `1px 1px 3px ${SHADOW}`,
});

const Overlay = styled(Box, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: BLACK,
  opacity: 0.1,
  zIndex: 10,
  '@lg': {
    opacity: 0.4,
    transition: '0.3s ease-in',
    '&:hover': {
      opacity: 0,
    },
  },
});

const OverlayTitle = styled(VFlex, {
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'flex-end',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '20%',
  backgroundColor: WHITE,
  zIndex: 15,
});

const Tags = styled(HFlex, {
  position: 'absolute',
  top: '100%',
  left: '5px',
  width: '100%',
  justifyContent: 'left',
});

const Tag = styled(Box, {
  backgroundColor: GREEN,
  borderRadius: '0 0 5px 5px',
  padding: '5px 10px',
  margin: '0 5px',
  justifyContent: 'center',
  alignItems: 'center',
});
