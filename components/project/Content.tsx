import React from "react";
import styles from "../../styles/project.module.scss";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import ImageRenderer from "../renderers/ImageRenderer";

type Props = {
    content: string
}

const Content: React.FC<Props> = ({ content }) => {
    return (
        <section className={styles.content}>
            <ReactMarkdown 
                children={content} components={{ 
                    image(props) { return <div></div> } 
                }}/>
        </section>
    );
};

export default Content;