import React from "react";
import styles from "../../styles/project.module.scss";
import classNames from "classnames";

type Props = {
    content: string
}

const Content: React.FC<Props> = ({ content }) => {
    return (
        <section className={styles.content}>
        </section>
    );
};

export default Content;