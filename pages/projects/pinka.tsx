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

const Pinka: NextPage = () => {
  let data: ProjectArticle = {
    id: 8,
    type: 'Side',
    title: 'Pinka',
    description: `Pinka is a game that helps players learn English. 
        This project was headed by Prof. Chen Zhi-Hong, who specializes in researching educational games. 
        Our team consisted of just two students. We designed and built a game mechanism to help players recite words from scratch. 
        When we finished the game’s first version, 
        we entered it into a competition against 20 projects from three different universities and won first place.`,
    keywords:
      'Pinka, Educational Game, Game, Game Programmer, Willake, Lin Hui En, Game Development, Game Portfolio, Portfolio',
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
          Pinka is a game that helps players learn English. This project was
          headed by Prof. Chen Zhi-Hong, who specializes in researching
          educational games. Our team consisted of just two students. We
          designed and built a game mechanism to help players recite words from
          scratch. When we finished the game’s first version, we entered it into
          a competition against 20 projects from three different universities
          and won first place.
        </Paragraph>
        <ImageBlock
          src="/images/projects/pinka/gifs/combat.gif"
          alt="combat"
          width={600}
          height={338}
        />
        <ImageBlock
          src="/images/projects/pinka/gifs/combat-2.gif"
          alt="combat-2"
          width={600}
          height={338}
        />
      </Content>
    </>
  );
};

export default Pinka;
