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
                    Snowball Rage is a game that a friend and I created for the 2018 Unreal Game Jam. At the Game Jam, 
                    developers have a week to create a game. I primarily used Blueprint to implement game functions. 
                    The idea was to allow players to experience the thrill of destruction. 
                    The game’s min character is a snowball that keeps rolling toward a village at the foot of a mountain. 
                    It keeps growing as it rolls down. It can destroy obstacles and roll over villagers to gain points on the way down. 
                    If a villager hits the snowball, it shrinks. 
                    The player must ensure the snowball is of a specific size when it reaches the village to destroy it.
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