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


const SecretTriangle: NextPage= () => {
    let data: ProjectArticle = {
        id: 7,
        type: "Side",
        title: "Secret Triangle",
        description: "",
        keywords: "Secret Triangle, turn-base, Game, Game Programmer, Willake, Lin Hui En, Game Development",
        size: "1",
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
                    Secret Triangle was my second game made in Unity. 
                    In contrast to I Just Want To Cook, which players interact with games by keyboards only, the main input of this game was by mouse. 
                    In this experience, I learned a different aspect of using ray cast. 
                    In addition, the combat system of the game was turn base, implementing this system helped me acquire the knowledge of state machine.
                </Paragraph>
                <ImageBlock 
                    src="/images/projects/secret-triangle/gifs/enter-combat.gif"
                    alt="enter-combat"
                    width={600}
                    height={338} />
                <Heading level={2}>Game Mechanic Implementation</Heading>
                <Paragraph>
                    Ray casting plays an important role in game development. 
                    For example, in my previous project, picking which objects was determined by the ray shoot from player character. 
                    Similarly, moving character by mouse was executed with the ray shoot from camera.
                </Paragraph>
                <ImageBlock 
                    src="/images/projects/secret-triangle/gifs/puzzle.gif"
                    alt="puzzle"
                    width={600}
                    height={338} />
                <Heading level={2}>Turn-Base Combat System</Heading>
                <Paragraph>
                    Turn-Base is an interesting combat system. It gives player more time to think their tactics without losing the excite mood. 
                    Initially, I was struggle with organizing the whole code base because I used a lot of if statement to maintain the whole system. 
                    It was not very efficiant and clean. 
                    After searching google for better solution, state machine is a good one.
                </Paragraph>
                <ImageBlock 
                    src="/images/projects/secret-triangle/gifs/combat.gif"
                    alt="combat"
                    width={600}
                    height={338} />
                <ImageBlock 
                    src="/images/projects/secret-triangle/gifs/skill.gif"
                    alt="skill"
                    width={600}
                    height={338} />
            </Content>
        </>
    );
};

export default SecretTriangle;