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
        id: 1,
        type: "Professional",
        title: "Forest Browser Extension",
        description: "",
        keywords: "Forest, Forest Browser, Game, Gamification, Game Programmer, Willake, Lin Hui En, Game Development",
        size: "3",
        language: "Javascript",
        role: "Front-End Intern"
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
                <Heading level={1}>Introduction</Heading>
                <Paragraph>
                    Forest Browser Extension is a mini gamification tool on Google Chrome and Firefox. 
                    It is like Forest but a function-limited version. 
                    In this extension, users could set up a timer and it will blocked all website except those in the allowed list. 
                    It was my first project in SeekrTech. 
                    I refactored the whole code base and developed new features that connect with Forest server. 
                    The experience was very valuable since I collaborated with a professional backend engineer and learnt a lot of knowledge about networking and database design.
                </Paragraph>
                <ImageBlock 
                    src="/images/projects/forest-browser/gifs/plant-tree.gif"
                    alt="Plant Tree"
                    width={600}
                    height={338} />
                <ImageBlock 
                    src="/images/projects/forest-browser/gifs/blocklist.gif"
                    alt="Blocklist"
                    width={600}
                    height={338} />
                <ImageBlock 
                    src="/images/projects/forest-browser/gifs/success.gif"
                    alt="Success"
                    width={600}
                    height={338} />
                <ImageBlock 
                    src="/images/projects/forest-browser/record.jpg"
                    alt="Record"
                    width={770}
                    height={636} />
            </Content>
        </>
    );
};

export default ForestBrowser;