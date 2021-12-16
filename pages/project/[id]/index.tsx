import React from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { server } from "../../../config";
import { ProjectArticle }from "../../../schema";
import Meta from "../../../components/Meta";
import styles from "../../../styles/project.module.scss";
import Banner from "../../../components/project/Banner";
import About from "../../../components/project/About";
import Content from "../../../components/project/Content";

type Props = {
    projectArticle: ProjectArticle
}

const project: NextPage<Props> = ({ projectArticle }) => {
    let keywords = "";
    let keywordsCount = projectArticle.keywords.length;
    for (let i = 0; i < keywordsCount; i++) {
        const keyword = projectArticle.keywords[i];
        keywords = keywords.concat(
            i < keywordsCount - 1 ? `${keyword},` : `${keyword}`
        );
    }
                
    return (
        <>
            <Meta 
                title={`${projectArticle.title} | Hui En Lin | Game Programmer`}
                description={projectArticle.description}
                keywords={keywords}/>
            <Banner title={projectArticle.title} />
            <About 
                type={projectArticle.type}
                size={projectArticle.size}
                language={projectArticle.language}
                role={projectArticle.role} />
            <Content 
                content={projectArticle.content} />
        </>
    );
};

type Params = {
    id: string
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    if(params === null && params === undefined) return { 
        props: {
            projectArticle: null
    }};

    const { id } = params as Params;

    const res = await fetch(`${server}/api/projects/${id}`);

    const projectArticle = await res.json();

    return {
        props: {
            projectArticle: projectArticle
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(
        `${server}/api/projects`
    );

    const projectArticles: ProjectArticle[] = await res.json();

    const ids = projectArticles.map(project => project.id);
    const paths = ids.map(id => ({
        params: {
            id: id.toString()
        }
    }));

    return {
        paths,
        fallback: false
    }
}

export default project;