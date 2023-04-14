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

const EscapeTheRoom: NextPage = () => {
  let data: ProjectArticle = {
    id: 5,
    type: 'Side',
    title: 'Escape the Room',
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
    language: 'Flash ActionScript 3.0',
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
          Escape The Room is the first game I have ever created. This type of
          game was popular when I was a child. The player’s goal is to escape an
          enclosed room by solving puzzles. When I built this game, I knew very
          little about programming, and it was hard to develop at first. But I
          gradually found that programming is an enjoyable activity. For me,
          solving programming problems is like solving puzzles in a game. I also
          designed puzzles and drew art materials by myself. These experiences
          gave me plenty of enjoyment.
        </Paragraph>
        <ImageBlock
          src="/images/projects/escape-the-room/gifs/grab-items.gif"
          alt="grab-items"
          width={600}
          height={446}
        />
        <Heading level={2}>Game Mechanic Implementation</Heading>
        <Paragraph>
          As a new programmer, making a game was not easy. Fortunately, the
          mechanism behind this game is not very complicated. All code,
          including puzzles and inventory, was made up of if-else statements.
        </Paragraph>
        <ImageBlock
          src="/images/projects/escape-the-room/gifs/get-wires.gif"
          alt="get-wires"
          width={600}
          height={446}
        />
        <Heading level={2}>Puzzle Design</Heading>
        <Paragraph>
          I like puzzle games and I played many of them while growing up. As
          such, I have plenty of ideas about puzzles. I drew many puzzles on
          paper and asked my friends to try them out. After that, I chose some
          feasible ones to put into my game program. Unfortunately, I lost the
          original hand-drawn plans.
        </Paragraph>
        <ImageBlock
          src="/images/projects/escape-the-room/gifs/turn-on-lamp.gif"
          alt="turn-on-lamp"
          width={600}
          height={446}
        />
        <ImageBlock
          src="/images/projects/escape-the-room/gifs/phone-puzzle.gif"
          alt="phone-puzzle"
          width={600}
          height={446}
        />
        <Heading level={2}>Art Assets</Heading>
        <Paragraph>
          I needed a large number of art materials for this project. But the
          resources on the Internet could not be fit together in the scenes very
          well, making the player’s experience poor, so I decided to draw them
          myself. I sought the help of a friend who is good at drawing to teach
          me, and I slowly drew the objects for the game over a few weeks.
        </Paragraph>
        <ImageBlock
          src="/images/projects/escape-the-room/screenshot_1.jpg"
          alt="screenshot_1"
          width={600}
          height={446}
        />
        <ImageBlock
          src="/images/projects/escape-the-room/screenshot_2.jpg"
          alt="screenshot_2"
          width={600}
          height={446}
        />
        <ImageBlock
          src="/images/projects/escape-the-room/screenshot_3.jpg"
          alt="screenshot_3"
          width={600}
          height={446}
        />
      </Content>
      <Link
        title="Download"
        href="https://drive.google.com/open?id=0B56LphuwhSzKQVczaGJnMjgwRjg"
      >
        Download
      </Link>
    </>
  );
};

export default EscapeTheRoom;
