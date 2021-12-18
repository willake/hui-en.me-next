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


const EscapeTheRoomRemake: NextPage= () => {
    let data: ProjectArticle = {
        id: 6,
        type: "Side",
        title: "I Just Want to Cook",
        description: "",
        keywords: "I Just Want to Cook, local multiple player, Game, Game Programmer, Willake, Lin Hui En, Game Development",
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
                    I Just Want to Cook is the game I made In my first Unity class in university. 
                    Restricting by teacher, this game was designed to be a local multiple player game. 
                    The game mechanic was designed by myself, inspiring from the conventional game, hide-and-seek. 
                    There are two characters, the hunter and the rabbit. 
                    The objective of hunter is to catch the rabbit, and the goal of rabbit is to find ingredients for cooking.
                </Paragraph>
                <ImageBlock 
                    src="/images/projects/i-just-want-to-cook/gifs/place-cheese.gif"
                    alt="place-cheese" 
                    width={600}
                    height={338} />
                <Heading level={2}>Local Multiple Players</Heading>
                <Paragraph>
                    The mechanic was not as easy as I thought. 
                    It is noticeable that the game is unplayable since these players play hide-and-seek when they could see each others screen. 
                    In order to make this game playable, maps were designed like mazes. 
                    By that, players could not precisely locate their opponents position even they could see them.
                </Paragraph>
                <ImageBlock 
                    src="/images/projects/i-just-want-to-cook/gifs/chasing.gif"
                    alt="chasing"
                    width={600}
                    height={338} />
                <Heading level={2}>Third Person Camera</Heading>
                <Paragraph>
                    In I Just Want to Cook, each player could only use four keys to move. 
                    For example, player No.1 uses W, A, S, and D to moving forward, backward, left and right respectively. 
                    However, it is clear that players is unable to control their camera by themselves, cameras should rotate automatically. 
                    In order to achieve this goal, I implement Zelda like third person camera which will rotate by themselves, depending on the direction player toward.
                </Paragraph>
                <ImageBlock 
                    src="/images/projects/i-just-want-to-cook/gifs/third-person-camera.gif"
                    alt="third-person-camera"
                    width={600}
                    height={446} />
                <Heading level={2}>World Space UI</Heading>
                <Paragraph>
                    I also did experiments in this game. For the user interface of main menu, I placed all interfaces in world space. 
                    Making UI switching be like traveling in the game world. It makes the menu more vigorous.
                </Paragraph>
                <ImageBlock 
                    src="/images/projects/i-just-want-to-cook/gifs/how-to-play-menu.gif"
                    alt="how-to-play-menu"
                    width={600}
                    height={338} />
                <ImageBlock 
                    src="/images/projects/i-just-want-to-cook/gifs/play-menu.gif"
                    alt="play-menu"
                    width={600}
                    height={338} />
            </Content>
        </>
    );
};

export default EscapeTheRoomRemake;