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

const SecretTriangle: NextPage = () => {
  let data: ProjectArticle = {
    id: 7,
    type: 'Side',
    title: 'Secret Triangle',
    description: `Secret Triangle is the second game I made with Unity. 
        Unlike I Just Want to Cook, which is operated with just the keyboard, this game uses a mouse as its primary controller. 
        From this experience, I learned different ways to use Unity’s ray casting function. 
        This game also uses a turn-base combat system. Using this system taught me about state machines.`,
    keywords:
      'Secret Triangle, turn-base, Game, Game Programmer, Willake, Lin Hui En, Game Development, Game Portfolio, Portfolio',
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
        <Paragraph>
          Secret Triangle is the second game I made with Unity. Unlike I Just
          Want to Cook, which is operated with just the keyboard, this game uses
          a mouse as its primary controller. From this experience, I learned
          different ways to use Unity’s ray casting function. This game also
          uses a turn-base combat system. Using this system taught me about
          state machines.
        </Paragraph>
        <ImageBlock
          src="/images/projects/secret-triangle/gifs/enter-combat.gif"
          alt="enter-combat"
          width={600}
          height={338}
        />
        <Heading level={2}>Game Mechanic Implementation</Heading>
        <Paragraph>
          The ray casting function plays a vital role in game development. In
          the game I Just Want to Cook, I used it for the function of picking up
          objects in front of a character. In this game, with rays emitted from
          the camera, the program can detect where the mouse is clicking on the
          floor and move in that direction. This showed me that many functions
          could be used in different ways.
        </Paragraph>
        <ImageBlock
          src="/images/projects/secret-triangle/gifs/puzzle.gif"
          alt="puzzle"
          width={600}
          height={338}
        />
        <Heading level={2}>Turn-Base Combat System</Heading>
        <Paragraph>
          Turn-Base is an interesting combat system. It gives the player more
          time to think about how to defeat the enemy and allows the player to
          appreciate the character animation after deciding on an action. At
          first, I encountered many problems in getting this system to work.
          Simple if-else statements made the codebase unclean, inefficient, and
          hard to manage. So I searched for information and found the state
          machine design pattern. Everything became manageable once I applied
          it.
        </Paragraph>
        <ImageBlock
          src="/images/projects/secret-triangle/gifs/combat.gif"
          alt="combat"
          width={600}
          height={338}
        />
        <ImageBlock
          src="/images/projects/secret-triangle/gifs/skill.gif"
          alt="skill"
          width={600}
          height={338}
        />
      </Content>
    </>
  );
};

export default SecretTriangle;
