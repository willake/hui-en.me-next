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
    title: 'Snowball Game',
    description: `This is a game for the AI for Game Technology course at Utrecht
    University. We made this game for learning player modeling. The
    objective of players is to defeat the final boss at the end of level.
    Enemies can be taken down by throwing snow balls. The game allows
    players to use different tactics to defeat the enemies. They can
    either ignore them, snipe them, or directly fight with them. The
    following is the instruction of playing the game.`,
    keywords:
      'Tow Down Shooting, 3D Game, Snowball, Game Programmer, Hui En Lin, Willake, Lin Hui En, Game Development, Game Portfolio, Portfolio',
    size: '4',
    language: 'Unity C#',
    role: 'Game Programmer',
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
        <Heading level={2}>Introduction</Heading>
        <ImageBlock
          src="/images/projects/snowball-game/fight_2.gif"
          alt="intro"
          width={600}
          height={330}
        />
        <InlineLink
          title="Play the game on itch.io"
          href="https://huienlin.itch.io/snowball-game"
        >
          Play the game on itch.io
        </InlineLink>
        <Paragraph>
          This is a game for the AI for Game Technology course at Utrecht
          University. We made this game for learning player modeling. The
          objective of players is to defeat the final boss at the end of level.
          Enemies can be taken down by throwing snow balls. The game allows
          players to use different tactics to defeat the enemies. They can
          either ignore them, snipe them, or directly fight with them. The
          following is the instruction of playing the game.
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
