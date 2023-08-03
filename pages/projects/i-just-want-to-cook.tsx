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

const IJustWantToCook: NextPage = () => {
  let data: ProjectArticle = {
    id: 6,
    type: 'Side',
    title: 'I Just Want to Cook',
    description: `I Just Want to Cook is the first game I made with Unity for a class. 
        The assignment was to build a local multiplayer game. 
        I designed the game mechanism drawing inspiration from the traditional hide-and-seek game we would play as children.
        This game has two main characters: hunter and rabbit. The hunter needs to catch the rabbit, 
        and the rabbit needs to look at a recipe to find ingredients and take them home to cook.`,
    keywords:
      'I Just Want to Cook, local multiple player, Game, Game Programmer, Willake, Lin Hui En, Game Development, Game Portfolio, Portfolio',
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
          I Just Want to Cook is the first game I made with Unity for a class.
          The assignment was to build a local multiplayer game. I designed the
          game mechanism drawing inspiration from the traditional hide-and-seek
          game we would play as children. This game has two main characters:
          hunter and rabbit. The hunter needs to catch the rabbit, and the
          rabbit needs to look at a recipe to find ingredients and take them
          home to cook.
        </Paragraph>
        <ImageBlock
          src="/images/projects/i-just-want-to-cook/gifs/place-cheese.gif"
          alt="place-cheese"
          width={600}
          height={338}
        />
        <Heading level={2}>Local Multiple Players</Heading>
        <Paragraph>
          The mechanism for this game was not as simple as I had anticipated.
          Obviously, hide and seek cannot be played within the local
          multiple-player mechanism, because the screen is divided between two
          players, and they can easily see each other’s screens. To make the
          mechanism work, I designed the map like a maze. This way, even if a
          player can see the opponent’s screen, there is no way to know the
          opponent’s location for certain.
        </Paragraph>
        <ImageBlock
          src="/images/projects/i-just-want-to-cook/gifs/chasing.gif"
          alt="chasing"
          width={600}
          height={338}
        />
        <Heading level={2}>Third Person Camera</Heading>
        <Paragraph>
          Due to limited keyboard space, two players can use only four arrow
          keys to move in I Just Want to Cook. For instance, one player uses W,
          A, S, and D to move forward, backward, left, and right. However, the
          players cannot control the camera angle, so I need to make the camera
          rotate automatically. To attain this goal, I referred to games like
          Zelda and GTA, and wrote a camera script that automatically rotates
          according to the player’s forward direction.
        </Paragraph>
        <ImageBlock
          src="/images/projects/i-just-want-to-cook/gifs/third-person-camera.gif"
          alt="third-person-camera"
          width={600}
          height={446}
        />
        <Heading level={2}>World Space UI</Heading>
        <Paragraph>
          I tried making changes to the UI system. In the main game menu, I put
          all the UI in a 3D scene and switched between different UIs, making
          the camera point toward the corresponding place, which made the UI
          more dynamic, as if the player is traveling through the scene.
        </Paragraph>
        <ImageBlock
          src="/images/projects/i-just-want-to-cook/gifs/how-to-play-menu.gif"
          alt="how-to-play-menu"
          width={600}
          height={338}
        />
        <ImageBlock
          src="/images/projects/i-just-want-to-cook/gifs/play-menu.gif"
          alt="play-menu"
          width={600}
          height={338}
        />
      </Content>
    </>
  );
};

export default IJustWantToCook;
