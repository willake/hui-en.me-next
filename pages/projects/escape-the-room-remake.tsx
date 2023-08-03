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

const EscapeTheRoomRemake: NextPage = () => {
  let data: ProjectArticle = {
    id: 3,
    type: 'Side',
    title: 'Escape the Room Remake',
    description: `Escape the Room Remake is a piece I created to practice 3D game development. 
        I remade a 2D Flash game I had previously built, called Escape the Room. In this development project, 
        I used the knowledge I had gained from Ryan Hipple’s speech “Game Architecture with Scriptable Objects” to 
        create a system that enables the program to observe changes in data and react accordingly. 
        I also found that this technique made the program structure easier to maintain. 
        In addition, this was my first game made with the Unreal Engine.`,
    keywords:
      'Escape the Room, Unreal Engine, 3D game, Game, Game Programmer, Willake, Lin Hui En, Game Development, Game Portfolio, Portfolio',
    size: '2',
    language: 'Unreal Blueprint',
    role: 'Gameplay Programmer',
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
          Escape the Room Remake is a piece I created to practice 3D game
          development. I remade a 2D Flash game I had previously built, called
          Escape the Room. In this development project, I used the knowledge I
          had gained from Ryan Hipple’s speech “Game Architecture with
          Scriptable Objects” to create a system that enables the program to
          observe changes in data and react accordingly. I also found that this
          technique made the program structure easier to maintain. In addition,
          this was my first game made with the Unreal Engine.
        </Paragraph>
        <ImageBlock
          src="/images/projects/escape-the-room-remake/gifs/grab-items.gif"
          alt="grab-items"
          width={600}
          height={338}
        />
        <Heading level={2}>Blueprint</Heading>
        <Paragraph>
          Blueprint is the visual scripting language of Unreal Engine. This
          language is easy to understand and suitable for fast-track
          development. With this advantage, I used Blueprint for the primary
          language of this game, enabling me to focus on understanding the
          architecture of Unreal Engine.
        </Paragraph>
        <ImageBlock
          src="/images/projects/escape-the-room-remake/gifs/open-painting.gif"
          alt="open-painting"
          width={600}
          height={338}
        />
        <Heading level={2}>Data oriented programming</Heading>
        <Paragraph>
          This is a program architecture inspired by Ryan Hipple’s speech. I had
          wanted to try this on Unity, so I decided to try the Unreal Engine
          with this project since I wished to gain exposure to the Unreal
          Engine. I found that it has a function similar to Unity’s
          ScriptableObject, which stores the state of the game in objects
          enabling the program to observe state changes and react accordingly. I
          used this system in my UI design, facilitating the debugging process.
        </Paragraph>
        <ImageBlock
          src="/images/projects/escape-the-room-remake/gifs/open-safe-case.gif"
          alt="open-safe-case"
          width={600}
          height={338}
        />
        <Heading level={2}>3D Art</Heading>
        <Paragraph>
          For this project, I cooperated with a professional 3D artist and
          learned a great deal about 3D games from him, such as how the
          animation of a 3D model is made and how to operate the game engine so
          that the character can hold different weapons. All this knowledge
          helped me understand 3D modeling better. I also learned about lighting
          and postprocessing, which helped me better understand how to apply my
          computer graphics knowledge to game development.
        </Paragraph>
        <ImageBlock
          src="/images/projects/escape-the-room-remake/gifs/open-tv.gif"
          alt="open-tv"
          width={600}
          height={338}
        />
        <ImageBlock
          src="/images/projects/escape-the-room-remake/gifs/break-glass.gif"
          alt="break-glass"
          width={600}
          height={338}
        />
        <ImageBlock
          src="/images/projects/escape-the-room-remake/gifs/sunlight.gif"
          alt="sunlight"
          width={600}
          height={338}
        />
      </Content>
      <Link
        title="Download"
        href="https://drive.google.com/open?id=1Q9VuZCsBFWiHdgQQeirCnUG6k0ZCJ6ih"
      >
        Download
      </Link>
    </>
  );
};

export default EscapeTheRoomRemake;
