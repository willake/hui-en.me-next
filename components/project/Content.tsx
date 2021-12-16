import React from "react";
import styles from "../../styles/project.module.scss";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";

type Props = {
    content: string
}

const Content: React.FC<Props> = ({ content }) => {
    return (
        <section className={styles.content}>
            <ReactMarkdown children={content}/>
        </section>
    );
};

export default Content;