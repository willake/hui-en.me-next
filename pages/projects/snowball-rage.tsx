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


const SnowballRage: NextPage= () => {
    let data: ProjectArticle = {
        id: 3,
        type: "Side",
        title: "Escape the Room Remake",
        description: "",
        keywords: "Snowball Rage, Unreal Engine, Game Jam, Game, Game Programmer, Willake, Lin Hui En, Game Development",
        size: "2",
        language: "Unreal Blueprint",
        role: "Gameplay Programmer",
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
                    Snowball Rage was a game jam project. 
                    A artist friend and me participated in 2018 Unreal Game Jam, which participants need to make a game in one week. 
                    My main duty is implementing significant gameplay mechanic with blueprints. 
                    The objective of the game was willing players to have a extreme fun experience. 
                    Rolling down a snow ball from the top of a mountain, destroying a village and killing enemies to get high score.
                </Paragraph>
                <ImageBlock 
                    src="/images/projects/snowball-rage/gifs/rage.gif"
                    alt="rage"
                    width={600}
                    height={338} />
                <Heading level={2}>Blueprint</Heading>
                <ImageBlock 
                    src="/images/projects/snowball-rage/gifs/slince.gif"
                    alt="slince"
                    width={600}
                    height={338} />
            </Content>
        </>
    );
};

export default SnowballRage;