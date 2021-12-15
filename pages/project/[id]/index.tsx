import { useRouter } from "next/router";
import React from "react";
import type { GetServerSideProps, GetStaticPaths, NextPage } from 'next'
import { server } from "../../../config";
import { ProjectArticle }from "../../../schema";

type Props = {
    projectArticle: ProjectArticle
}

const Project: NextPage<Props> = ({ projectArticle }) => {
    return (
        <div>{ projectArticle.id }</div>
    );
};

export const getStaticProps: GetServerSideProps<Props> = async (context) => {
    const res = await fetch(`${server}/api/projects/{id}`);

    const projectArticle = await res.json();

    return {
        props: {
            projectArticle: projectArticle
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(
        `${server}/projects`
    )

    const projectArticles: ProjectArticle[] = await res.json();

    const ids = projectArticles.map(project => project.id);
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}

export default Project;