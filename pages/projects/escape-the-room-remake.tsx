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
import Link from "../../components/project/Link";


const EscapeTheRoomRemake: NextPage= () => {
    let data: ProjectArticle = {
        id: 3,
        type: "Side",
        title: "Escape the Room Remake",
        description: "",
        keywords: "Escape the Room, Unreal Engine, 3D game, Game, Game Programmer, Willake, Lin Hui En, Game Development",
        size: "2",
        language: "Unreal Blueprint",
        role: "Gameplay Programmer"
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
                    In order to practice 3D game development from beginning, the quickest way would be remake a existing game. 
                    Meanwhile I try to make a simple game with knowledge that I recently acquired, which make code structure rigorous and easy for debugging. 
                    That is why Escape The Room Remake came out, and it is my first game in Unreal Engine.
                </Paragraph>
                <ImageBlock 
                    src="/images/projects/escape-the-room-remake/gifs/grab-items.gif"
                    alt="grab-items"
                    width={600}
                    height={338} />
                <Heading level={2}>Blueprint</Heading>
                <Paragraph>
                    Blueprint is a visual scripting language in unreal engine. 
                    It is pretty useful for fast track development and experiment. 
                    In order to quickly understand how to use Unreal Engine, I chose it as the core script language in the game. 
                    With its advantage, I could focus on doing experiment and gaining feedback quickly.
                </Paragraph>
                <ImageBlock 
                    src="/images/projects/escape-the-room-remake/gifs/open-painting.gif"
                    alt="open-painting"
                    width={600}
                    height={338} />
                <Heading level={2}>Data oriented programming</Heading>
                <Paragraph>
                    It was inspired by a talk in Unity conference, &quot;Unite Austin 2017 - Game Architecture with Scriptable Objects&quot; by Ryan Hipple. 
                    It used ScriptableObject, which is a scriptable data object in Unity, as the storage of game state. 
                    All objects in game subscribed states in scriptable objects and reacted when data changed. 
                    I implemented this concept into my UI system, managing and monitoring states such as selecting item and obtained item in an object.
                </Paragraph>
                <ImageBlock 
                    src="/images/projects/escape-the-room-remake/gifs/open-safe-case.gif"
                    alt="open-safe-case"
                    width={600}
                    height={338} />
                <Heading level={2}>3D Art</Heading>
                <Paragraph>
                    In this game, I worked with a professional 3D artist, and learnt much knowledge about 3D games and post processing shader. 
                    It is very useful for me to know how animations work in 3D modeling, with the knowledge I could better determine approaches in different situations. 
                    In addition, the knowledge of lighting and post processing helped me more understand computer graphics in a applied way.
                </Paragraph>
                <ImageBlock 
                    src="/images/projects/escape-the-room-remake/gifs/open-tv.gif"
                    alt="open-tv"
                    width={600}
                    height={338} />
                <ImageBlock 
                    src="/images/projects/escape-the-room-remake/gifs/break-glass.gif"
                    alt="break-glass"
                    width={600}
                    height={338} />
                <ImageBlock 
                    src="/images/projects/escape-the-room-remake/gifs/sunlight.gif"
                    alt="sunlight"
                    width={600}
                    height={338} />
            </Content>
            <Link title="Download" href="https://drive.google.com/open?id=1Q9VuZCsBFWiHdgQQeirCnUG6k0ZCJ6ih">
                Download
            </Link>
        </>
    );
};

export default EscapeTheRoomRemake;