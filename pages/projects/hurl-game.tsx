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
import VideoBlock from 'components/project/VideoBlock';

const HurlGame: NextPage = () => {
  let data: ProjectArticle = {
    id: 12,
    type: 'Side',
    title: 'Hurl Game',
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
    size: '2',
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
        <Paragraph>
          Hurl Game is a game for game jam. I teamed up with another programmer
          to attend Weekly Game Jam on itch.io with the theme of "throwing." Our
          game allows players to use the mouse to throw a ball at a wall to
          collect score. The motivation for this project is inspired by a talk
          named "Juice It or Lose It", which emphasized the importance of adding
          sound and visual effects to create a more immersive player experience.
          With this in mind, we set out to create a game that was not only fun
          but also engaging and exciting.
        </Paragraph>
        <ImageBlock
          src="/images/projects/hurl-game/intro.png"
          alt="intro"
          width={347}
          height={195}
        />
        <VideoBlock
          title="Juice It or Lose It"
          src="https://www.youtube.com/watch?v=Fy0aCDmgnxg"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        <Heading level={2}>Introduction</Heading>
        <ImageBlock
          src="/images/projects/hurl-game/gifs/gameplay-1.gif"
          alt="gameplay-1"
          width={347}
          height={195}
        />
        <Paragraph>
          The game we created allows players to use their mouse to throw a ball
          at a wall, which increases their score. We also incorporated a fever
          bar that players can fill by making combos. Once the fever bar is
          full, the game enters fever mode, where the score per hit
          significantly increases. Our game's scoring system is similar to that
          of a basketball arcade, where players need to collect enough points to
          enter the next level. Overall, we're proud of what we were able to
          accomplish in such a short amount of time and hope players enjoy our
          game.
        </Paragraph>
        <ImageBlock
          src="/images/projects/hurl-game/gifs/fever.gif"
          alt="fever"
          width={347}
          height={195}
        />
      </Content>
      <Link title="Play" href="https://huienlin.itch.io/hurl-game">
        Play
      </Link>
    </>
  );
};

export default HurlGame;
