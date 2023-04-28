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
import InlineLink from 'components/project/InlineLink';

const FruitAmI: NextPage = () => {
  let data: ProjectArticle = {
    id: 9,
    type: 'Side',
    title: 'Fruit Am I',
    description: `This is a game for Weekly Game Jam 249 and the subject is Mysterious
    Fruit. It was made in 6 days including game design, art, and
    programming. We are inspired by Rusty Lake which is a well-known
    puzzle game. We made all this from scratch from the first day of the
    game jam without pre-developed tools and discussions.`,
    keywords:
      'Escape the Room, 2D Game, Fruit Am I, Game Programmer, Hui En Lin, Willake, Lin Hui En, Game Development, Game Portfolio, Portfolio',
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
        <ImageBlock
          src="/images/projects/fruit-am-i/intro.png"
          alt="intro"
          width={300}
          height={300}
        />
        <Paragraph>
          This is a game for Weekly Game Jam 249 and the subject is Mysterious
          Fruit. It was made in 6 days including game design, art, and
          programming. We are inspired by Rusty Lake which is a well-known
          puzzle game. We made all this from scratch from the first day of the
          game jam without pre-developed tools and discussions.
        </Paragraph>
        <Paragraph>
          In addition, I wrote a devlog for this project and a demo project for
          the core system in this game.
        </Paragraph>
        <InlineLink
          title="DevLog"
          href="https://huienlin.itch.io/fruit-am-i/devlog/373700/the-development-of-fruit-am-i"
        >
          DevLog
        </InlineLink>
        <InlineLink
          title="Demo Project"
          href="https://github.com/willake/reaction-system-demo"
        >
          Demo Project
        </InlineLink>
        <ImageBlock
          src="/images/projects/fruit-am-i/gifs/switch-scene.gif"
          alt="switch-scene"
          width={300}
          height={300}
        />
        <ImageBlock
          src="/images/projects/fruit-am-i/gifs/puzzle.gif"
          alt="puzzle"
          width={300}
          height={300}
        />
      </Content>
      <Link title="Play" href="https://huienlin.itch.io/fruit-am-i">
        Play
      </Link>
    </>
  );
};

export default FruitAmI;
