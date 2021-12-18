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


const EscapeTheRoom: NextPage= () => {
    let data: ProjectArticle = {
        id: 5,
        type: "Side",
        title: "Escape the Room",
        description: "",
        keywords: "Escape the Room, 2D Game, Flash Game, Game Programmer, Willake, Lin Hui En, Game Development",
        size: "1",
        language: "Flash ActionScript 3.0",
        role: "Game Programmer",
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
                    Escape The Room was my first game. This kind of game was very common in Flash games. 
                    The objective of player is find a key to escape from a place. When I made this game, I only know a little about programming. 
                    It was tough at the beginning. However I found that programming was very fun for me. 
                    Solving problems was like solving puzzle in games. 
                    Except programming, I also designed the puzzles and drew art assets. All of these were good experience as well.
                </Paragraph>
                <ImageBlock 
                    src="/images/projects/escape-the-room/gifs/grab-items.gif"
                    alt="grab-items"
                    width={600}
                    height={446} />
                <Heading level={2}>Game Mechanic Implementation</Heading>
                <Paragraph>
                    As a novice of programming, creating a game was not easy. 
                    Fortunately the mechanic was not complicated, all of them was successfully implemented with ActionScript 3.0. 
                    The code base was simple, with full of if else statement, containing the mechanic of puzzle and inventory. 
                    The state of the game relied on global variables.
                </Paragraph>
                <ImageBlock 
                    src="/images/projects/escape-the-room/gifs/get-wires.gif"
                    alt="get-wires"
                    width={600}
                    height={446} />
                <Heading level={2}>Puzzle Design</Heading>
                <Paragraph>
                    I love puzzle games, and I played a lot when I was a child. 
                    With that experience, I designed a number of puzzles for testing. 
                    All of them were drew on paper at the beginning and test by my friends. 
                    I picked some of them, which were plausible and interesting, into the real game. .
                    Unfortunately, the manuscript was lost so I could not show it.
                </Paragraph>
                <ImageBlock 
                    src="/images/projects/escape-the-room/gifs/turn-on-lamp.gif"
                    alt="turn-on-lamp"
                    width={600}
                    height={446} />
                <ImageBlock 
                    src="/images/projects/escape-the-room/gifs/phone-puzzle.gif"
                    alt="phone-puzzle"
                    width={600}
                    height={446} />
                <Heading level={2}>Art Assets</Heading>
                <Paragraph>
                    In this game, a lot of arts would be needed. 
                    I asked a friend to teach me how to draw a scene. 
                    It was not very complicated since all game objects were simple shapes. Scenes were frames in Flash. 
                    I drew scenes in four directions and specific scenes for objects.
                </Paragraph>
                <ImageBlock 
                    src="/images/projects/escape-the-room/screenshot_1.jpg"
                    alt="screenshot_1"
                    width={600}
                    height={446} />
                <ImageBlock 
                    src="/images/projects/escape-the-room/screenshot_2.jpg"
                    alt="screenshot_2"
                    width={600}
                    height={446} />
                <ImageBlock 
                    src="/images/projects/escape-the-room/screenshot_3.jpg"
                    alt="screenshot_3"
                    width={600}
                    height={446} />
            </Content>
        </>
    );
};

export default EscapeTheRoom;