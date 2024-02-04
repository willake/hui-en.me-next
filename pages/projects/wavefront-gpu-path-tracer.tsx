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

const WavefrontGPUPathTracer: NextPage = () => {
  let data: ProjectArticle = {
    id: 15,
    type: 'Side',
    title: 'Wavefront GPU Path Tracer',
    description: `Wavefront GPU Path Tracer is a ray tracing renderer. Apart from the ray tracing rendering features, 
    a GPU implementation is developed to accelarate the efficiency of tracing. 
    The implementation is based on the paper Megakernels considered harmful: wavefront 
    path tracing on GPUs by Samuli Laine, Tero Karras, and Timo Aila. Depends on the features enabled, 
    the GPU version can outperform the CPU version 3x - 10x.`,
    keywords:
      'C++, GPU, Graphics, Game Programmer, Hui En Lin, Willake, Lin Hui En, Game Development, Game Portfolio, Portfolio',
    size: '1',
    language: 'C++',
    role: 'Graphgic Programmer, Engine Programmer',
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
        <Heading level={2}>About this project</Heading>
        <Paragraph>
          Wavefront GPU Path Tracer is a ray tracing renderer. Apart from the
          ray tracing rendering features, a GPU implementation is developed to
          accelarate the efficiency of tracing. The implementation is based on
          the paper Megakernels considered harmful: wavefront path tracing on
          GPUs by Samuli Laine, Tero Karras, and Timo Aila. Depends on the
          features enabled, the GPU version can outperform the CPU version 3x -
          10x.
        </Paragraph>
        <ImageBlock
          src="/images/projects/wavefront-gpu-path-tracer/real-time.gif"
          alt="intro"
          width={600}
          height={375}
        />
        <ImageBlock
          src="/images/projects/wavefront-gpu-path-tracer/base-scene.JPG"
          alt="intro"
          width={600}
          height={375}
        />
        <InlineLink
          title="Github Repository"
          href="https://github.com/willake/wavefront-gpu-path-tracer"
        >
          Github Repository
        </InlineLink>
        <Paragraph>
          The ray tracer was almost developed from scratch. Aside from the GPU
          acceleration, I implemeneted top-level BVH as the acceleration
          structure for the tracer to traverse the scene objects. A traversal
          inspector is also implemented to check the efficiency of a BVH
          structure.
        </Paragraph>
        <ImageBlock
          src="/images/projects/wavefront-gpu-path-tracer/traversal-inspector.gif"
          alt="intro"
          width={600}
          height={375}
        />
        <Paragraph>
          The ray tracer also have the capbability to read scene files, which
          means that scenes are not hardcoded in the code. The user can
          configure a scene by using a text editor. Furthermore, several
          rendering features in ray tracing are implemented such as mirro,
          transmission, microfacet BRDF, Next Event Esitimation, Depth of Field,
          Gamma Correction, and Skybox.
        </Paragraph>
        <ImageBlock
          src="/images/projects/wavefront-gpu-path-tracer/dof.gif"
          alt="intro"
          width={600}
          height={375}
        />
        <ImageBlock
          src="/images/projects/wavefront-gpu-path-tracer/gamma-correction.JPG"
          alt="intro"
          width={600}
          height={375}
        />
        <ImageBlock
          src="/images/projects/wavefront-gpu-path-tracer/microfacet.JPG"
          alt="intro"
          width={600}
          height={375}
        />
        <ImageBlock
          src="/images/projects/wavefront-gpu-path-tracer/bright.JPG"
          alt="intro"
          width={600}
          height={375}
        />
        <ImageBlock
          src="/images/projects/wavefront-gpu-path-tracer/hollow-knight.JPG"
          alt="intro"
          width={600}
          height={375}
        />
      </Content>
    </>
  );
};

export default WavefrontGPUPathTracer;
