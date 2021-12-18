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


const Pinka: NextPage= () => {
    let data: ProjectArticle = {
        id: 8,
        type: "Side",
        title: "Pinka",
        description: "",
        keywords: "Pinka, Educational Game, Game, Game Programmer, Willake, Lin Hui En, Game Development",
        size: "2",
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
                    Pinka is a game that help users learn English. 
                    This project was conducted by Dr. Zhi-Hong Chen, who is focusing on researching educational game. 
                    The team was only included 2 students, we designed the game mechanic together with professor and implemented all gameplay feature in Unity C#. 
                    When the first version of prototype was finished, we won a competition that over 20 teams from 3 different schools participated in as the first place.
                </Paragraph>
                <ImageBlock 
                    src="/images/projects/pinka/gifs/combat.gif"
                    alt="combat"
                    width={600}
                    height={338} />
                <ImageBlock 
                    src="/images/projects/pinka/gifs/combat-2.gif"
                    alt="combat-2"
                    width={600}
                    height={338} />
            </Content>
        </>
    );
};

export default Pinka;