import React from 'react';
import type { NextPage } from 'next';
import { ProjectArticle } from '../../schema';
import Meta from '../../components/Meta';
import Banner from '../../components/project/Banner';
import About from '../../components/project/About';
import Content from '../../components/project/Content';
import Heading from '../../components/project/Heading';
import Paragraph from '../../components/project/Paragraph';
import ImageBlock from '../../components/project/ImageBlock';
import Link from '../../components/project/Link';

const SoundsGood: NextPage = () => {
  let data: ProjectArticle = {
    id: 11,
    type: 'Side',
    title: 'Sounds Good',
    description: `Escape The Room is the first game I have ever created. 
        This type of game was popular when I was a child. 
        The player’s goal is to escape an enclosed room by solving puzzles. 
        When I built this game, I knew very little about programming, and it was hard to develop at first. 
        But I gradually found that programming is an enjoyable activity. 
        For me, solving programming problems is like solving puzzles in a game. 
        I also designed puzzles and drew art materials by myself. 
        These experiences gave me plenty of enjoyment.`,
    keywords:
      'Escape the Room, 2D Game, Flash Game, Game Programmer, Willake, Lin Hui En, Game Development, Game Portfolio, Portfolio',
    size: '1',
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
          src="/images/projects/sounds-good/gifs/battle.gif"
          alt="battle"
          width={600}
          height={336}
        />
        <ImageBlock
          src="/images/projects/sounds-good/gifs/smart-ai.gif"
          alt="smart-ai"
          width={600}
          height={336}
        />
        <ImageBlock
          src="/images/projects/sounds-good/gifs/record.gif"
          alt="record"
          width={600}
          height={336}
        />
      </Content>
      <Link title="Play" href="https://huienlin.itch.io/sounds-good">
        Play
      </Link>
    </>
  );
};

export default SoundsGood;
