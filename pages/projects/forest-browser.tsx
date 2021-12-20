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


const ForestBrowser: NextPage= () => {
    let data: ProjectArticle = {
        id: 1,
        type: "Professional",
        title: "Forest Browser Extension",
        description: `Forest Browser Extension is a mini gamification tool on Google Chrome and Firefox. 
        It is like the Forest app, which is the main product of Seekrtech, but a feature-limited version. 
        In this extension, users can set up a timer that blocks all websites except those in the allowed list. 
        It was my first project at SeekrTech. 
        I refactored the whole codebase and developed new features that connected with the server API of Forest. 
        The experience was valuable, since I collaborated with a professional back-end engineer and gained a great deal of networking and database design knowledge.`,
        keywords: "Forest, Forest Browser, Game, Gamification, Game Programmer, Willake, Lin Hui En, Game Development, Game Portfolio, Portfolio",
        size: "3",
        language: "Javascript",
        role: "Front-End Intern"
    }

    return (
        <>
            <Meta 
                title={`${data.title} | Game Programmer Portfolio`}
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
                    Forest Browser Extension is a mini gamification tool on Google Chrome and Firefox. 
                    It is like the Forest app, which is the main product of Seekrtech, but a feature-limited version. 
                    In this extension, users can set up a timer that blocks all websites except those in the allowed list. 
                    It was my first project at SeekrTech. 
                    I refactored the whole codebase and developed new features that connected with the server API of Forest. 
                    The experience was valuable, since I collaborated with a professional back-end engineer and gained a great deal of networking and database design knowledge.
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
            <Link title="Firefox" href="https://addons.mozilla.org/en-US/firefox/addon/forest-stay-focused-be-present/">
                Firefox Addon
            </Link>
            <Link title="Chrome" href="https://chrome.google.com/webstore/detail/forest-stay-focused-be-pr/kjacjjdnoddnpbbcjilcajfhhbdhkpgk?hl=en">
                Chrome Extension
            </Link>
        </>
    );
};

export default ForestBrowser;