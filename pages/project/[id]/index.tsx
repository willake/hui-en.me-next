import { useRouter } from "next/router";
import React from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { server } from "../../../config";
import { ProjectArticle }from "../../../schema";
import Meta from "../../../components/Meta";

type Props = {
    projectArticle: ProjectArticle
}

const project: NextPage<Props> = ({ projectArticle }) => {
    return (
        <>
            <Meta 
                title={projectArticle.title}
                description="avc"
                keywords="abc"/>
            <div>{ projectArticle.id.toString() }</div>
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