import React from "react";
import type { NextPage } from 'next';
import { ProjectArticle }from "../../schema";
import Meta from "../../components/Meta";
import Banner from "../../components/project/Banner";
import About from "../../components/project/About";
import Content from "../../components/project/Content";
import Heading from "../../components/project/Heading";
import Paragraph from "../../components/project/Paragraph";
import ImageBlock from "../../components/project/ImageBlock";


const Hourglass: NextPage= () => {
    let data: ProjectArticle = {
        id: 2,
        type: "Side",
        title: "Hourglass",
        description: `Hourglass was my graduation project. 
        It is a game that involves travel through time and space. In the game, players have to go back and forth to solve puzzles in different time periods. 
        There are many action elements along the way, making it a challenging game. 
        My primary duty in the project was to implement gameplay features, including character movement, object interaction, and boss fighting. 
        In addition, we introduced shaders to enhance the animation effect and make it more energetic. 
        Besides developing systems in the project, I also learned to cooperate with other people who had different areas of expertise.`,
        keywords: "Hourglass, Unity, 2D Game, side-scroll, time travel, Game Programmer, Willake, Lin Hui En, Game Development, Game Portfolio, Portfolio",
        size: "7",
        language: "Unity C#",
        role: "Game Programmer"
    }

    return (
        <>
            <Meta 
                title={`${data.title} | Hui En Lin | Game Programmer Portfolio`}
                description={data.description}
                keywords={data.keywords}/>
            <Banner title={data.title} />
            <About 
                type={data.type}
                size={data.size}
                language={data.language}
                role={data.role} />
            <Content>
                <Heading level={2}>Introduction</Heading>
                <Paragraph>
                    Hourglass was my graduation project. 
                    It is a game that involves travel through time and space. In the game, players have to go back and forth to solve puzzles in different time periods. 
                    There are many action elements along the way, making it a challenging game. 
                    My primary duty in the project was to implement gameplay features, including character movement, object interaction, and boss fighting. 
                    In addition, we introduced shaders to enhance the animation effect and make it more energetic. 
                    Besides developing systems in the project, I also learned to cooperate with other people who had different areas of expertise.
                </Paragraph>
                <Paragraph>
                    It is a 2D-scrolling puzzle game, about a scientist willing to restore the mistakes he did before. 
                    Players could travel between three different time period (past, now, future) anytime to solve puzzle, experiencing the story, 
                    seeing a village from flouring to destroyed.
                </Paragraph>
                <ImageBlock 
                    src="/images/projects/hourglass/gifs/plant-seed.gif"
                    alt="plant-seed"
                    width={600}
                    height={338} />
                <ImageBlock 
                    src="/images/projects/hourglass/gifs/swing-rope-1.gif"
                    alt="swing-rope-1"
                    width={600}
                    height={338} />
                <Heading level={2}>Time Travel Mechanic</Heading>
                <Paragraph>
                    Time Travel Mechanic is the main gaming mechanism of the game. 
                    I designed a system to divide the three spatiotemporal scenes into different layers and 
                    manage them with a state manager that controls the game’s camera to choose which layer scene to view and 
                    hides scenes that do not belong in this spatiotemporal scene, thereby controlling and managing resources 
                    appropriately to boost efficiency. 
                    There are no cutscenes between the times and spaces in this system, making the experience smoother.
                </Paragraph>
                <ImageBlock 
                    src="/images/projects/hourglass/gifs/time-travel-1.gif"
                    alt="time-travel-1"
                    width={600}
                    height={338} />
                <ImageBlock 
                    src="/images/projects/hourglass/gifs/time-travel-2.gif"
                    alt="time-travel-2"
                    width={600}
                    height={338} />
                <ImageBlock 
                    src="/images/projects/hourglass/gifs/time-travel-4.gif"
                    alt="time-travel-4"
                    width={600}
                    height={338} />
                <ImageBlock 
                    src="/images/projects/hourglass/gifs/time-travel-5.gif"
                    alt="time-travel-5"
                    width={600}
                    height={338} />
                <Heading level={2}>Boss Fight</Heading>
                <Paragraph>
                    I used the state machine’s design pattern to manage the boss’s AI for the boss level. 
                    It observes the current state of the boss and makes it behave accordingly. 
                    For instance, when the boss’s blood volume is about to run out, 
                    it will try to bite the rope that the protagonist is climbing to make it fall into the water.
                </Paragraph>
                <ImageBlock 
                    src="/images/projects/hourglass/gifs/boss-fight-5.gif"
                    alt="boss-fight-5"
                    width={600}
                    height={338} />
                <ImageBlock 
                    src="/images/projects/hourglass/gifs/boss-fight-2.gif"
                    alt="boss-fight-2"
                    width={600}
                    height={338} />
                <ImageBlock 
                    src="/images/projects/hourglass/gifs/boss-fight-3.gif"
                    alt="boss-fight-3"
                    width={600}
                    height={338} />                
                <ImageBlock 
                    src="/images/projects/hourglass/gifs/boss-fight-4.gif"
                    alt="boss-fight-4"
                    width={600}
                    height={338} />
                <Heading level={2}>Collaboration Skill</Heading>
                <Paragraph>
                    At first, most of my teammates did not have experience working with others on game development. 
                    We had at least seven members in our team, which made matters more complicated. 
                    We all conducted our tasks separately without much communication among us. 
                    This slowed the progress of our development. 
                    Fortunately, we were a team of dedicated solution seekers. 
                    We soon realized the problem and held several meetings to address the situation. We made some changes, 
                    such as using Trello to plan and track the progress of our work and help us understand what everyone else was doing. 
                    Such changes significantly elevated our work efficiency and helped coordinate our work.
                </Paragraph>
            </Content>
        </>
    );
};

export default Hourglass;