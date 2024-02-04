import React from 'react';
import type { NextPage } from 'next';
import { ProjectArticle } from '../../schema';
import Meta from 'components/Meta';
import Banner from 'components/Project/Banner';
import About from 'components/Project/About';
import Content from 'components/Project/Content';
import Heading from 'components/Project/Heading';
import Paragraph from 'components/Project/Paragraph';
import ImageBlock from 'components/Project/ImageBlock';
import Link from 'components/Project/Link';
import InlineLink from 'components/Project/InlineLink';

const SnowballGame: NextPage = () => {
  let data: ProjectArticle = {
    id: 13,
    type: 'Side',
    title: 'Vreactable',
    description: `VReactable is an interface that serves as a bridge between the virtual reality (VR) realm and 
    the physical world. The tool runs on a VR platform named Resonite, which is a platform that allows users to 
    customize their own space and write scripts in their virtual space. VReactable provides a tangible interface 
    in which users can manipulate a Resonite world by moving cubes in the real world. This brings an opportunity 
    for users to interact with VR users differently.`,
    keywords:
      'AR, VR, XR, Extended Reality, research, interaction design, Game Programmer, Hui En Lin, Willake, Lin Hui En, Game Development, Game Portfolio, Portfolio',
    size: '3',
    language: 'Python',
    role: 'Python Developer',
  };

  return (
    <>
      <Meta
        title={`${data.title} | Hui En Lin | Game Programmer Portfolio`}
        description={data.description}
        keywords={data.keywords}
      />
      <Banner title={data.title} />
      <About
        type={data.type}
        size={data.size}
        language={data.language}
        role={data.role}
      />
      <Content>
        <ImageBlock
          src="/images/projects/overview_optimized.gif"
          alt="intro"
          width={600}
          height={330}
        />
        <Heading level={2}>About this project</Heading>
        <Heading level={2}>About VReactable</Heading>
        <ImageBlock
          src="/images/projects/snowball-game/fight_2.gif"
          alt="intro"
          width={600}
          height={330}
        />
        <Paragraph>
          VReactable is an interface that serves as a bridge between the virtual
          reality (VR) realm and the physical world. The tool runs on a VR
          platform named Resonite, which is a platform that allows users to
          customize their own space and write scripts in their virtual space.
          VReactable provides a tangible interface in which users can manipulate
          a Resonite world by moving cubes in the real world. This brings an
          opportunity for users to interact with VR users differently.
        </Paragraph>
        <ImageBlock
          src="/images/projects/snowball-game/instruction.jpg"
          alt="instruction"
          width={600}
          height={330}
        />
        <Paragraph>
          For the game AI, we used behavior tree as our AI system. The AI is
          made in four different types: Regular, Ranger, Sniper, and Boss. Each
          has advantage and disadvantage.
        </Paragraph>
        <ImageBlock
          src="/images/projects/snowball-game/sniper.gif"
          alt="sniper"
          width={600}
          height={330}
        />
        <ImageBlock
          src="/images/projects/snowball-game/behavior-tree.png"
          alt="behavior-tree"
          width={600}
          height={330}
        />
      </Content>
    </>
  );
};

export default SnowballGame;
