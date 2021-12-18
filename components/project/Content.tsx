import React from "react";
import styles from "../../styles/project.module.scss";
import ReactMarkdown from "react-markdown";
import directive from 'remark-directive';
import { youtube } from "../custom-remark-plugins/plugins";

type Props = {
    content: string
}

const Content: React.FC<Props> = ({ content }) => {
    return (
        <section className={styles.content}>
            <ReactMarkdown 
                children={content} components={{}} remarkPlugins={[directive, youtube]}/>
        </section>
    );
};

export default Content;