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


const ForestBrowser: NextPage= () => {
    let data: ProjectArticle = {
        id: 2,
        type: "Side",
        title: "Hourglass",
        description: "",
        keywords: "Hourglass, Unity, 2D Game, side-scroll, time travel, Game Programmer, Willake, Lin Hui En, Game Development",
        size: "7",
        language: "Unity C#",
        role: "Game Programmer"
    }

    return (
        <>
            <Meta 
                title={`${data.title} | Hui En Lin | Game Programmer`}
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
                    Hourglass was a graduate project in my final year of university. My main duty was implementing gameplay mechanics, 
                    including character movement, object interaction and boss fighting. 
                    In addition, I imported shaders bought from Unity Assets Store to improv animations, making them more vigorous. 
                    In this experience, collaborating within the team was the most valuable skills that I acquired.
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
                    Time traveling is the core mechanic in this game. 
                    I divided game assets into three different layers, manage them by a state manager. 
                    It controls camera and culls everything that is not belong to the certain time period. 
                    Because all objects in certain level are preloaded, so travelling between time period is very smooth.
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
                    In the Boss level, I implemented the Boss AI with a state machine. 
                    It manage the boss movement and determined suitable reaction. 
                    For example when the boss is almost dead then it will start trying to cut the rope that player is grabbing.
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
                    Initially, most of members in the team had no much cooperating experience in game development, especially working with over 7 people. 
                    We worked on our positions separately without much communication, which led the whole game development process slow. 
                    Fortunately, all of us were dedicated solution seekers. 
                    We found this problem and had many meetings, discussing about how to improving productivity. 
                    After then, several tools were adopted to overcome this issue. 
                    For example, we started using Trello to manage schedule and track works. 
                    It clearly allowed us working more closely and knowing works of each other. In terms of programming team, we adopted the new version control feature of Unity, which is based on git but server was provided by Unity official. 
                    It significantly reduce the amount of merging issues.
                </Paragraph>
            </Content>
        </>
    );
};

export default ForestBrowser;