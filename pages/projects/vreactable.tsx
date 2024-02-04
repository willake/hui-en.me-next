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

const VReactable: NextPage = () => {
  let data: ProjectArticle = {
    id: 14,
    type: 'Side',
    title: 'Vreactable',
    description: `VReactable is an interface that serves as a bridge between the virtual reality (VR) realm and 
    the physical world. The tool runs on a VR platform named Resonite, which is a platform that allows users to 
    customize their own space and write scripts in their virtual space. VReactable provides a tangible interface 
    in which users can manipulate a Resonite world by moving cubes in the real world. This brings an opportunity 
    for users to interact with VR users differently.`,
    keywords:
      'AR, VR, XR, Extended Reality, research, interaction design, Game Programmer, Hui En Lin, Willake, Lin Hui En, Game Development, Game Portfolio, Portfolio',
    size: '3',
    language: 'Python',
    role: 'Python Developer',
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
          VReactable is a research project conducted at Hogeschool voor de
          Kunsten Utrecht. We are supervised by the XR researcher Joris Weijdom
          as a client to create a tool designed to inspire XR artists and
          captivate individuals without prior experience in XR. The team consist
          of a programmer, an 3D artists, and an interaction designer. We
          developed the tool from scratch including interviewing with target
          groups, product analysis, product design, development, and playtest. I
          contributed to the project as a Python developer and also participated
          in every process in product development. The outcome of this project
          has been publicly released on Github. It has received approval from
          both the client and the supervisors.
        </Paragraph>
        <ImageBlock
          src="/images/projects/vreactable/visualizer-1_optimized.gif"
          alt="intro"
          width={600}
          height={330}
        />
        <InlineLink
          title="VReactable source code"
          href="https://github.com/willake/vreactable"
        >
          VReactable source code
        </InlineLink>
        <Heading level={2}>About VReactable</Heading>
        <Paragraph>
          VReactable is an interface that serves as a bridge between the virtual
          reality (VR) realm and the physical world. The tool runs on a VR
          platform named Resonite, which is a platform that allows users to
          customize their own space and write scripts in their virtual space.
          VReactable provides a tangible interface in which users can manipulate
          a Resonite world by moving cubes in the real world. This brings an
          opportunity for users to interact with VR users differently.
        </Paragraph>
        <ImageBlock
          src="/images/projects/vreactable/showcase-setup.jpg"
          alt="setup"
          width={600}
          height={400}
        />
        <ImageBlock
          src="/images/projects/vreactable/cube.jpg"
          alt="cubes"
          width={600}
          height={330}
        />
        <Paragraph>
          The tool transform the cube states to parameters. In Resonite, users
          can apply the parameters to various of usage. For example, the cube
          rotation yaw can become the intensity of light, the volume of music,
          or even color. To create a dynamic exhitbition in virtual world.
        </Paragraph>
        <ImageBlock
          src="/images/projects/vreactable/visualizer-2_optimized.gif"
          alt="cube-rotation-yaw"
          width={600}
          height={330}
        />
        <Paragraph>
          To track the objects, we use ArUco Marker in OpenCV's library. ArUco
          markers represent a category of fiducial markers designed for easy
          recognition by computer vision systems. It is widely used in the field
          of pose recognition in robotics. These markers typically consist of
          blackand-white squares or rectangles with unique patterns that cameras
          can readily identify.
        </Paragraph>
        <ImageBlock
          src="/images/projects/vreactable/tracking_optimized.gif"
          alt="tracking"
          width={600}
          height={330}
        />
        <ImageBlock
          src="/images/projects/vreactable/tracking_dark_optimized.gif"
          alt="tracking-dark"
          width={600}
          height={330}
        />
        <Paragraph>
          I created a user-friendly GUI for the cube tracker in Python to
          simplify its usage, recognizing that running Python scripts with
          command lines might not be intuitive for non-developers. A camera
          calibration tool is developed as well to increase camera tracking
          quality.
        </Paragraph>
        <ImageBlock
          src="/images/projects/vreactable/vreactable-python_optimized.gif"
          alt="python"
          width={600}
          height={330}
        />
        <ImageBlock
          src="/images/projects/vreactable/sampling_optimized.gif"
          alt="calibration"
          width={600}
          height={330}
        />
        <Heading level={2}>Showcase</Heading>
        <Paragraph>
          The tool was presented in several exhitbtion inside HKU. We develop a
          preset which transform cubes into virtual object insde the virtual
          world, exemplifying the potential for multiple users to work together.
          In this scenario, we constructed a space with various 3D models. To
          delineate the roles of users on both sides, cube users assume
          responsibility for large objects in the space and environment
          settings, assessing the overall presentation from a top view.
          Conversely, VR users focus on the visual experience from a
          first-person perspective, generating smaller objects such as
          characters and animals within the space. This collaborative approach
          empowers users to collectively craft a well-balanced virtual space
          engagingly. During exhitbition, some visitors expressed keen interest
          in the tool’s interaction with the virtual world and proposed
          intriguing ideas based on its capabilities. For instance, a student
          from the game design discipline suggested using the tool for
          storytelling as a Dungeon Master in a Dungeon and Dragons (DnD) game.
          Another individual envisioned the tool’s potential application in
          controlling music parameters. Our observation revealed that many
          artists drew inspiration from the tool during the showcase.
        </Paragraph>
        <ImageBlock
          src="/images/projects/vreactable/overview_optimized.gif"
          alt="calibration"
          width={600}
          height={330}
        />
        <ImageBlock
          src="/images/projects/vreactable/showcase.jpg"
          alt="calibration"
          width={400}
          height={300}
        />
      </Content>
    </>
  );
};

export default VReactable;
