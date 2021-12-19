import React from "react";
import type { NextPage } from 'next';
import { ProjectArticle }from "../../schema";
import Meta from "../../components/Meta";
import Banner from "../../components/project/Banner";
import About from "../../components/project/About";
import Content from "../../components/project/Content";
import Heading from "../../components/project/Heading";
import Paragraph from "../../components/project/Paragraph";
import VideoBlock from "../../components/project/VideoBlock";
import Link from "../../components/project/Link";


const WaterDo: NextPage= () => {
    let data: ProjectArticle = {
        id: 0,
        type: "Professional",
        title: "WaterDo",
        description: "",
        keywords: "to-do list, WaterDo, Game, Gamification, Game Programmer, Willake, Lin Hui En, Game Development",
        size: "over 10",
        language: "Unity C#",
        role: "Unity Software Engineer"
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
                    WaterDo is a todo list app with gamification feature, 
                    making daily tasks fun. In this app, 
                    users schedule their personal tasks as bubbles, popping them when they completed and gaining energy. 
                    With energy gain from bubbles, users could explore stories in WaterDo. 
                    I participated the project from scratch as a Unity programmer, worked in a cross-functional team with professional people.
                </Paragraph>
                <VideoBlock 
                    title="WaterDo"
                    src="https://www.youtube.com/embed/xmeTMo7Ej8E"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
            </Content>
            <Link title="Official Website" href="https://waterdo.seekrtech.com/en/">Official Website</Link>
            <Link title="App Store" href="https://apps.apple.com/us/app/waterdo-to-do-list-notes/id1388228852">App Store</Link>
            <Link title="Google Play Store" href="https://play.google.com/store/apps/details?id=com.seekrtech.waterapp">Google Play Store</Link>
        </>
    );
};

export default WaterDo;