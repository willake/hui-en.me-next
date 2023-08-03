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

const SoundsGood: NextPage = () => {
  let data: ProjectArticle = {
    id: 11,
    type: 'Side',
    title: 'Sounds Good',
    description: `Sounds Good is a final student project for a course in Sound and Music
    Technology at Utrecht University. The project aimed to research
    whether it's possible to create a game that can deliver information
    correctly via visual and audio cues so that visually impaired people
    can also play it.`,
    keywords:
      'Sounds Good, 2D Game, Fighting Game, Game Programmer, Hui En Lin, Hui En, Willake, Lin Hui En, Game Development, Game Portfolio, Portfolio',
    size: '7',
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
          src="/images/projects/sounds-good/gifs/smart-ai.gif"
          alt="smart-ai"
          width={600}
          height={336}
        />
        <Paragraph>
          Sounds Good is a final student project for a course in Sound and Music
          Technology at Utrecht University. The project aimed to research
          whether it is possible to create a game that can deliver information
          correctly via visual and audio cues so that visually impaired people
          can also play it. The team invited 50 people to participate in the
          experiment and divided them into two groups: one group played the game
          with visuals, and the other played it only with audio. Although the
          research structure was not well-defined, and the results were not
          clear, the team had a great experience developing the game.
        </Paragraph>
        <InlineLink title="Paper" href="/sounds_good.pdf">
          Paper
        </InlineLink>
        <Paragraph>
          In this game, I developed the main gameplay features, UI management
          system, and a file saving system to save records and collect data for
          the experiment. The project was an exciting experience for the team,
          and we learned a lot from it.
        </Paragraph>
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
